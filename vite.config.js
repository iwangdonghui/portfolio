import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  // Set root directory to the current directory
  root: '.',
  
  // Configure the public directory
  publicDir: 'public',
  
  // Configure the build
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    rollupOptions: { // <<< --- ADD THIS SECTION
      input: {
        main: resolve(__dirname, 'index.html'),
        // only one portfolio page
        portfolio: resolve(__dirname, 'portfolio.html'),
        // If you have more HTML pages in the root, add them here following the same pattern
      }
    }
  },
  
  // Configure the server
  server: {
    port: 5173,
    open: true
  }
})