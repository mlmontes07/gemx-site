#!/bin/sh
set -eu

DOMAIN_VAL="$(printf '%s' "${DOMAIN:-gemx.ph}" | sed 's#^https\?://##; s#/*$##')"
HUB_DOMAIN_VAL="$(printf '%s' "${HUB_DOMAIN:-hub.gemx.ph}" | sed 's#^https\?://##; s#/*$##')"
HUB_URL_VAL="${HUB_URL:-https://${HUB_DOMAIN_VAL}}"

# Sanitize double quotes/backslashes before writing JS object
clean_js() {
  printf '%s' "$1" | sed 's/\\/\\\\/g; s/"/\\"/g'
}

cat > /usr/share/nginx/html/env-config.js <<EOF
window.__GEMX_CONFIG__ = {
  DOMAIN: "$(clean_js "$DOMAIN_VAL")",
  HUB_DOMAIN: "$(clean_js "$HUB_DOMAIN_VAL")",
  HUB_URL: "$(clean_js "$HUB_URL_VAL")"
};
EOF

# Keep robots.txt and sitemap.xml aligned if DOMAIN in .env differs from build-time default
if [ -f /usr/share/nginx/html/robots.txt ]; then
  cat > /usr/share/nginx/html/robots.txt <<EOF
User-agent: *
Allow: /

Sitemap: https://${DOMAIN_VAL}/sitemap.xml
EOF
fi

if [ -f /usr/share/nginx/html/sitemap.xml ] && [ "$DOMAIN_VAL" != "gemx.ph" ]; then
  sed -i "s#https://gemx\.ph#https://${DOMAIN_VAL}#g" /usr/share/nginx/html/sitemap.xml || true
fi
