import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],

  build: {
    // Target modern browsers — smaller, faster output
    target: 'es2020',

    // Strip console.log and debugger statements in production
    minify: 'esbuild',

    // Don't emit sourcemaps (saves bandwidth)
    sourcemap: false,

    // Inline small assets as base64 (reduces HTTP requests)
    assetsInlineLimit: 4096,

    // Split CSS per chunk for faster per-page loading
    cssCodeSplit: true,

    // Raise chunk size warning threshold (framer-motion is large by design)
    chunkSizeWarningLimit: 800,

    rollupOptions: {
      output: {
        // Fine-grained manual chunks — each loads only when needed
        manualChunks: {
          'vendor-react':  ['react', 'react-dom'],
          'vendor-router': ['react-router-dom'],
          'vendor-motion': ['framer-motion'],
          'vendor-icons':  ['lucide-react'],
        },
        // Stable, hash-based file names for long-term caching
        chunkFileNames:  'assets/js/[name]-[hash].js',
        entryFileNames:  'assets/js/[name]-[hash].js',
        assetFileNames:  'assets/[ext]/[name]-[hash].[ext]',
      },
    },
  },

  // Dependency pre-bundling — speeds up cold-start dev server
  optimizeDeps: {
    include: [
      'react',
      'react-dom',
      'react-router-dom',
      'framer-motion',
      'lucide-react',
    ],
  },

  // Faster esbuild transforms
  esbuild: {
    // Remove all console.* and debugger calls from production build
    drop: ['console', 'debugger'],
    legalComments: 'none',
  },
})

