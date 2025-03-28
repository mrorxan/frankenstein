import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    cssCodeSplit: true,
    reportCompressedSize: false,
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          // Split components into separate chunks
          components: [
            './src/components/CharacterAnalysis.jsx',
            './src/components/Timeline.jsx',
            './src/components/ModernFrankensteins.jsx',
            './src/components/QuoteGenerator.jsx'
          ]
        }
      }
    }
  },
  optimizeDeps: {
    include: ['react', 'react-dom']
  }
})