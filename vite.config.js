import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: './',           // ✅ Important: fixes CSS not loading with BrowserRouter
  plugins: [react()],
})
