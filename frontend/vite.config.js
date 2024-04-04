import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})

module.exports = {
  root: './',
  build: {
    ourDir: 'dist',
  },
  publicDir: 'src/assets'
}
