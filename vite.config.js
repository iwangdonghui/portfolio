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
        item01: resolve(__dirname, 'portfolio-item-01.html'),
        item02: resolve(__dirname, 'portfolio-item-02.html'),
        item03: resolve(__dirname, 'portfolio-item-03.html'),
        item04: resolve(__dirname, 'portfolio-item-04.html'),
        item05: resolve(__dirname, 'portfolio-item-05.html'),
        item06: resolve(__dirname, 'portfolio-item-06.html'),
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