
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: './',
  build: {
    outDir: 'dist',
    sourcemap: false,
    assetsInlineLimit: 0, // Prevent any assets from being inlined
    rollupOptions: {
      output: {
        manualChunks: undefined,
      },
    },
  },
});
