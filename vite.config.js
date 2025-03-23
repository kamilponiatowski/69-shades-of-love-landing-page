// vite.config.ts
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
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
      template: 'treemap', // Szablon wizualizacji: treemap, sunburst, network
      open: false, // Nie otwieraj raportu automatycznie po zbudowaniu
      gzipSize: true, // Pokaż rozmiar po kompresji gzip
      brotliSize: true, // Pokaż rozmiar po kompresji brotli
      filename: 'stats.html' // Nazwa pliku wynikowego
    })
  ],
  
  // Aliasy ścieżek dla importów
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
    extensions: [
      '.js',
      '.ts',
      '.vue'
    ]
  },
  
  // Ścieżka bazowa dla wdrożenia
  base: './',
  
  // Ustawienia serwera deweloperskiego
  server: {
    port: 3000,
    open: true,
    // Dodaj proxy jeśli potrzebujesz połączenia z API
    proxy: {
      // '/api': {
      //   target: 'http://api.example.com',
      //   changeOrigin: true,
      //   rewrite: (path) => path.replace(/^\/api/, '')
      // }
    }
  },
  
  // Opcje budowania
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true, // Usuń console.log w produkcji
        drop_debugger: true // Usuń instrukcje debugger w produkcji
      }
    },
    // Rozdziel kod na mniejsze kawałki dla lepszego ładowania
    rollupOptions: {
      output: {
        manualChunks: {
          'vue-vendor': ['vue'],
          'pinia-vendor': ['pinia'],
          // Dodaj więcej chunków w miarę potrzeb
        }
      }
    },
    // Generuj manifesty dla lepszego śledzenia zasobów
    manifest: true,
    // Sprawdź rozmiar zasobów i ostrzegaj, jeśli są za duże
    chunkSizeWarningLimit: 500 // w kB
  },
  
  // Ustawienia optymalizacji
  optimizeDeps: {
    include: [
      'vue',
      'pinia'
      // Dodaj inne zależności, które powinny być prebudowane
    ]
  },
  
  // Konfiguracja CSS
  css: {
    devSourcemap: true, // Włącz mapy źródłowe dla CSS w trybie dev
    postcss: {
      plugins: [
        // Tu można dodać pluginy PostCSS
      ]
    }
  }
});