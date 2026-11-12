#!/usr/bin/env bash
set -e

# Colors for terminal output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$DIR"

NO_CACHE=false
for arg in "$@"; do
    case "$arg" in
        --no-cache)
            NO_CACHE=true
            ;;
        --help|-h)
            echo "Usage: ./deploy.sh [--no-cache]"
            echo "  Safely builds and updates the production gemX website container (ulthra_website_app_prod)."
            echo "  --no-cache   Rebuild Docker layers from scratch before swapping the container"
            exit 0
            ;;
    esac
done

echo -e "${BLUE}======================================================${NC}"
echo -e "${BLUE}🚀 Deploying gemX Website (ulthra-website) in Docker${NC}"
echo -e "${BLUE}======================================================${NC}"

# 1. Check prerequisites
if ! command -v docker &> /dev/null; then
    echo -e "${RED}❌ Docker is not installed. Please install Docker first.${NC}"
    exit 1
fi

if ! docker compose version &> /dev/null; then
    echo -e "${RED}❌ Docker Compose plugin is not installed. Please install docker-compose-plugin.${NC}"
    exit 1
fi

# 2. Check .env file (existing production .env is always preserved)
if [ ! -f "$DIR/.env" ]; then
    echo -e "${YELLOW}⚠️  No .env file found. Copying .env.example to .env...${NC}"
    cp "$DIR/.env.example" "$DIR/.env"
    echo -e "${GREEN}✅ Default .env created from .env.example.${NC}"
fi

# Load PORT / BIND_ADDR / DOMAIN / HUB_DOMAIN for build args & status summary
set -a
# shellcheck disable=SC1091
source "$DIR/.env"
set +a

# 3. Create host directory for persistent Nginx access/error logs
mkdir -p "$DIR/logs"

# 4. Build new image while existing container keeps serving traffic, then swap
echo -e "${BLUE}📦 Building and updating production container (docker-compose.server.yml)...${NC}"
if [ "$NO_CACHE" = true ]; then
    docker compose -f docker-compose.server.yml build --no-cache
    docker compose -f docker-compose.server.yml up -d --remove-orphans
else
    docker compose -f docker-compose.server.yml up -d --build --remove-orphans
fi

# 5. Remove untagged dangling build images to keep VPS disk clean across updates
docker image prune -f >/dev/null 2>&1 || true

# 6. Wait for container healthcheck
echo -e "${BLUE}⏳ Waiting for Nginx healthcheck (/healthz)...${NC}"
sleep 3

# 7. Show status
echo -e "${GREEN}======================================================${NC}"
echo -e "${GREEN}✅ gemX Website Deployment Completed Successfully!${NC}"
echo -e "${GREEN}======================================================${NC}"
docker compose -f docker-compose.server.yml ps

echo ""
echo -e "Public Domain     : https://${DOMAIN:-gemx.ph} (Sign In -> https://${HUB_DOMAIN:-hub.gemx.ph})"
echo -e "Website Container : http://${BIND_ADDR:-0.0.0.0}:${PORT:-8383}"
echo -e "Health Endpoint   : http://127.0.0.1:${PORT:-8383}/healthz"
echo ""
echo -e "💡 First-time Host Nginx setup (or if DOMAIN / PORT changed in .env):"
echo -e "   ./docker/setup-nginx-proxy.sh"
echo ""
echo -e "💡 To view live logs:"
echo -e "   docker compose -f docker-compose.server.yml logs -f app"
echo ""
