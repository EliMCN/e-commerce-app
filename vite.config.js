
// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: true //no es necesario npm run dev -- -- host cada vez que corro.
  }
})
