import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  build: {
    rollupOptions: {
      output: {
        // Vendor libraries change far less often than app code —
        // splitting them lets browsers cache them across deploys
        // and across route navigations instead of one monolithic
        // chunk being invalidated by every app-code change.
        manualChunks(id) {
          if (!id.includes('node_modules')) return undefined;
          if (
            id.includes('/react/') ||
            id.includes('/react-dom/') ||
            id.includes('/react-router-dom/') ||
            id.includes('/react-router/') ||
            id.includes('/scheduler/')
          ) {
            return 'vendor-react';
          }
          if (id.includes('/framer-motion/') || id.includes('/motion-dom/') || id.includes('/motion-utils/')) {
            return 'vendor-motion';
          }
          if (id.includes('/gsap/')) return 'vendor-gsap';
          if (id.includes('/lenis/')) return 'vendor-lenis';
          return undefined;
        },
      },
    },
  },
})