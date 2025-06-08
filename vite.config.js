import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        // Add your JS file
        input:'src/input.js'
      }
    }
  }
})