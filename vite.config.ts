import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import { comlink } from 'vite-plugin-comlink';
import { ManifestOptions, VitePWA } from 'vite-plugin-pwa';

const manifest: Partial<ManifestOptions> = {
  theme_color: '#ffffff',
  background_color: '#555',
  display: 'standalone',
  scope: '/wesly-playground',
  start_url: '/wesly-playground',
  name: 'Wesly playground',
  description: 'Wesly playground',
  short_name: 'WP',
  icons: [
    {
      src: '/wesly-playground/icon-192x192.png',
      sizes: '192x192',
      type: 'image/png',
    },
    {
      src: '/wesly-playground/icon-256x256.png',
      sizes: '256x256',
      type: 'image/png',
    },
    {
      src: '/wesly-playground/icon-384x384.png',
      sizes: '384x384',
      type: 'image/png',
    },
    {
      src: '/wesly-playground/icon-512x512.png',
      sizes: '512x512',
      type: 'image/png',
    },
  ],
};

// https://vitejs.dev/config/
export default defineConfig({
  base: '/wesly-playground/',
  plugins: [
    react(),
    comlink(),
    VitePWA({
      workbox: {
        globPatterns: ['**/*'],
      },
      includeAssets: ['**/*'],
      manifest: manifest,
    }),
  ],
  worker: {
    plugins: [comlink()],
  },
});
