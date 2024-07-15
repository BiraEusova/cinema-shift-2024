import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve, dirname } from "path";
import { fileURLToPath } from 'url';

// https://vitejs.dev/config/
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
export default defineConfig({
  plugins: [react()],
  base: "/",
  resolve: {
    alias: [{ find: "@", replacement: resolve(__dirname, "./src") }]
  },
})
