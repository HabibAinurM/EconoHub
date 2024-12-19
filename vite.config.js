import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'EconoHub',
        short_name: 'EconoHub',
        description: 'Aplikasi EconoHub',
        theme_color: '#00609E',
        icons: [
          {
            src: 'Logo.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: 'Logo.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
    }),
  ],
});
