# =============================================================================
# Stage 1: Build TypeScript + React + Vite Production Bundle
# =============================================================================
FROM node:22-alpine AS builder

WORKDIR /app

# Install dependencies cleanly with lockfile layer caching
COPY package.json package-lock.json ./
RUN npm ci

# Copy application source & static assets and build optimized dist/
COPY index.html tsconfig.json vite.config.ts ./
COPY public ./public
COPY src ./src
RUN npm run build

# =============================================================================
# Stage 2: Lightweight Production Nginx Web Server
# =============================================================================
FROM nginx:1.27-alpine AS production

# Remove default Nginx site config and install SPA + caching config
RUN rm -f /etc/nginx/conf.d/default.conf
COPY docker/nginx/default.conf /etc/nginx/conf.d/default.conf

# Copy compiled static production bundle from builder stage
COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80

HEALTHCHECK --interval=15s --timeout=5s --start-period=10s --retries=5 \
  CMD wget -q -O /dev/null http://127.0.0.1/healthz || exit 1

CMD ["nginx", "-g", "daemon off;"]

