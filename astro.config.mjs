import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // Site URL for sitemap and canonical URLs
  site: 'https://paddleswithwolves.com',

  // Build configuration
  output: 'static',

  // Server configuration for local development
  server: {
    port: 4321,
    host: true
  },

  // Build optimizations
  build: {
    inlineStylesheets: 'auto',
  },

  // Compression
  compressHTML: true,

  // Prefetch configuration for better performance
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'viewport',
  },

  // Vite configuration for advanced optimizations
  vite: {
    build: {
      cssMinify: true, // Use default CSS minifier (esbuild)
      rollupOptions: {
        output: {
          manualChunks: {
            // Split vendor chunks for better caching
            'gsap': ['gsap'],
          },
        },
      },
    },
  },
});
