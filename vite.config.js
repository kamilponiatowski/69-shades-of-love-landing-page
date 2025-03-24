// vite.config.js
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';
import { fileURLToPath, URL } from 'node:url';
import { visualizer } from 'rollup-plugin-visualizer';

/**
 * Konfiguracja Vite
 * @see https://vitejs.dev/config/
 */
export default defineConfig({
  plugins: [
    vue(),
    // Plugin do analizy rozmiaru paczki
    visualizer({
      template: 'treemap',
      open: false,
      gzipSize: true,
      brotliSize: true,
      filename: 'stats.html'
    })
  ],
  
  // Aliasy ścieżek dla importów
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    },
    extensions: [
      '.mjs',
      '.js',
      '.ts',
      '.jsx',
      '.tsx',
      '.json',
      '.vue'
    ]
  },
  
  // Ścieżka bazowa dla wdrożenia (zmieniona na '/' dla prawidłowego działania w dev)
  base: '/',
  
  // Ustawienia serwera deweloperskiego
  server: {
    port: 3000,
    open: true,
    host: true // Pozwala na dostęp z zewnątrz
  },
  
  // Poprawna konfiguracja dla plików statycznych i HTML
  publicDir: 'public',
  
  // Opcje budowania
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true
      }
    },
    rollupOptions: {
      output: {
        manualChunks: {
          'vue-vendor': ['vue'],
          'pinia-vendor': ['pinia']
        }
      }
    },
    manifest: true,
    chunkSizeWarningLimit: 500
  }
});