import { defineConfig } from 'vite'

export default defineConfig({
  // Set root directory to the current directory
  root: '.',
  
  // Configure the public directory
  publicDir: 'public',
  
  // Configure the build
  build: {
    outDir: 'dist',
    assetsDir: 'assets'
  },
  
  // Configure the server
  server: {
    port: 5173,
    open: true
  }
})
