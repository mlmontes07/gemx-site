import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ isSsrBuild }) => ({
  plugins: [react()],
  envPrefix: ['VITE_', 'DOMAIN', 'HUB_'],
  build: isSsrBuild
    ? undefined
    : {
        rollupOptions: {
          output: {
            manualChunks(id) {
              if (id.includes('node_modules/react-router')) {
                return 'vendor-router';
              }
              if (
                id.includes('node_modules/react/') ||
                id.includes('node_modules/react-dom/') ||
                id.includes('node_modules/scheduler/')
              ) {
                return 'vendor-react';
              }
              return undefined;
            },
          },
        },
      },
  server: {
    port: 4321,
    host: true,
  },
}));

