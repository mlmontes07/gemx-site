#!/usr/bin/env bash
set -e

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
ROOT_ENV="${SCRIPT_DIR}/../.env"
if [ -f "$ROOT_ENV" ]; then
  set -a
  # shellcheck disable=SC1090
  source "$ROOT_ENV"
  set +a
fi

DOMAIN="${1:-${DOMAIN:-gemx.ph}}"
APP_PORT="${2:-${PORT:-8383}}"

echo "🔧 Setting up Multi-App Host Nginx Reverse Proxy for ${DOMAIN} (-> 127.0.0.1:${APP_PORT})..."

# 1. Install Nginx & OpenSSL if not present
if ! command -v nginx &> /dev/null; then
  sudo apt-get update -y
  sudo apt-get install -y nginx openssl
fi

# 2. Generate TLS certificate for this domain (works seamlessly with Cloudflare Full SSL)
sudo mkdir -p /etc/nginx/ssl
CERT_CRT="/etc/nginx/ssl/${DOMAIN}.crt"
CERT_KEY="/etc/nginx/ssl/${DOMAIN}.key"

if [ ! -f "$CERT_CRT" ] || [ ! -f "$CERT_KEY" ]; then
  echo "🔐 Generating TLS certificate at ${CERT_CRT}..."
  sudo openssl req -x509 -nodes -days 3650 -newkey rsa:2048 \
    -keyout "$CERT_KEY" \
    -out "$CERT_CRT" \
    -subj "/C=PH/ST=MetroManila/L=Makati/O=gemX/CN=${DOMAIN}"
  sudo chmod 600 "$CERT_KEY"
fi

# 3. Write dedicated vhost config for this domain (coexists cleanly with ulthra-mezzio vhosts)
sudo tee "/etc/nginx/sites-available/${DOMAIN}.conf" > /dev/null <<EOF
server {
    listen 80;
    listen [::]:80;
    listen 443 ssl http2;
    listen [::]:443 ssl http2;

    server_name ${DOMAIN} www.${DOMAIN};

    ssl_certificate     ${CERT_CRT};
    ssl_certificate_key ${CERT_KEY};
    ssl_protocols       TLSv1.2 TLSv1.3;
    ssl_ciphers         HIGH:!aNULL:!MD5;

    # Preserve visitor IP behind Cloudflare
    real_ip_header CF-Connecting-IP;

    location / {
        proxy_pass http://127.0.0.1:${APP_PORT};
        proxy_http_version 1.1;
        proxy_set_header Host \$host;
        proxy_set_header X-Real-IP \$remote_addr;
        proxy_set_header X-Forwarded-For \$proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto \$scheme;
        proxy_buffers 16 16k;
        proxy_buffer_size 32k;
        proxy_read_timeout 60s;
    }
}
EOF

# 4. Enable this domain's vhost
sudo ln -sf "/etc/nginx/sites-available/${DOMAIN}.conf" "/etc/nginx/sites-enabled/${DOMAIN}.conf"

# 5. Open firewall ports 80 & 443 if UFW is active
if command -v ufw &> /dev/null && sudo ufw status | grep -q "Status: active"; then
  sudo ufw allow 'Nginx Full' >/dev/null 2>&1 || {
    sudo ufw allow 80/tcp >/dev/null 2>&1 || true
    sudo ufw allow 443/tcp >/dev/null 2>&1 || true
  }
fi

# 6. Test and reload Nginx
sudo nginx -t
sudo systemctl enable nginx
sudo systemctl reload nginx || sudo systemctl restart nginx

echo "✅ Nginx vhost for ${DOMAIN} is live on ports 80 & 443 -> http://127.0.0.1:${APP_PORT}"

