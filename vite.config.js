import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// import 'tailwindcss' from ''
import vueDevTools from 'vite-plugin-vue-devtools'
/** @type {import('tailwindcss').Config} */


export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
  ],
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",  // ini wajib
  ],
  theme: {
    extend: {},
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
})
