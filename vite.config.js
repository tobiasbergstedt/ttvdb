import { defineConfig } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [
    VitePWA({
      manifest: {
        background_color: 'grey',
        display: 'standalone',
        icons: [
          {
            purpose: 'any',
            sizes: '192x192',
            src: 'manifest-icon-192.maskable.png',
            type: 'image/png',
          },
          {
            purpose: 'maskable',
            sizes: '192x192',
            src: 'manifest-icon-192.maskable.png',
            type: 'image/png',
          },
          {
            purpose: 'any',
            sizes: '512x512',
            src: 'manifest-icon-512.maskable.png',
            type: 'image/png',
          },
          {
            purpose: 'maskable',
            sizes: '512x512',
            src: 'manifest-icon-512.maskable.png',
            type: 'image/png',
          },
        ],
        name: 'Terrific TV DataBase',
        short_name: 'TTVDB',
        start_url: '.',
        theme_color: 'red',
      },
      registerType: 'autoUpdate',
      workbox: {
        globPatterns: ['assets/**', 'index.html', 'manifest.webmanifest'],
        runtimeCaching: [
          {
            handler: 'NetworkFirst',
            // Cache GET requests to https://avancera.app/cities/
            urlPattern: 'https://api.tvmaze.com/',
          },
          // {
          //   handler: 'NetworkFirst',
          //   // Regular expression to cache GET requests to
          //   // “https://avancera.app/cities/ID” (with or without a trailing
          //   // slash)
          //   urlPattern: /https:\/\/avancera\.app\/cities\/[0-9a-f-]+\/?/
          // }
        ],
      },
    }),
    vue(),
  ],
})
