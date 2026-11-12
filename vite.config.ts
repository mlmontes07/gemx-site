import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  envPrefix: ['VITE_', 'DOMAIN', 'HUB_'],
  server: {
    port: 4321,
    host: true,
  },
});

