// vite.config.js
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';
import { fileURLToPath, URL } from 'node:url';
import { visualizer } from 'rollup-plugin-visualizer';

/**
 * Vite configuration
 * @see https://vitejs.dev/config/
 */
export default defineConfig({
  plugins: [
    vue(),
    // Plugin for parcel size analysis
    visualizer({
      template: 'treemap',
      open: false,
      gzipSize: true,
      brotliSize: true,
      filename: 'stats.html'
    })
  ],
  
  // Path aliases for imports
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
  
  // Base path for deployment (changed to '/' for proper development operation)
  base: '/',
  
  // Development server settings
  server: {
    port: 3000,
    open: true,
    host: true // Allow access from outside
  },
  
  // Fix configuration for static files and HTML
  publicDir: 'public',
  
  // Build options
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