#!/bin/sh
set -eu

DOMAIN_VAL="${DOMAIN:-gemx.ph}"
HUB_DOMAIN_VAL="${HUB_DOMAIN:-hub.gemx.ph}"
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

