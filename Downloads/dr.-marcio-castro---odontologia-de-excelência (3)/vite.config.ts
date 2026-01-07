
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import EnvironmentPlugin from 'vite-plugin-environment';

export default defineConfig({
  // 'base' deve ser o nome do seu repositório no GitHub entre barras
  base: '/site-dentista/',
  plugins: [
    react(),
    EnvironmentPlugin(['API_KEY'])
  ],
  server: {
    host: true
  },
  build: {
    outDir: 'dist',
    sourcemap: false
  }
});
