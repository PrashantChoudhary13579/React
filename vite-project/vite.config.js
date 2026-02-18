import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
})

// in this we can change the configuration of the vite
// we can also start this react based project on different port of the vite using this.