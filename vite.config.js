import { defineConfig } from 'vite'

export default defineConfig({
  // Базовые настройки
  base: './',
  
  // Настройки сборки
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    
    // Минификация
    minify: 'terser',
    
    // Source maps для отладки
    sourcemap: false,
    
    // Разделение кода
    rollupOptions: {
      output: {
        // Названия файлов
        entryFileNames: 'assets/main-[hash].js',
        chunkFileNames: 'assets/chunk-[hash].js', 
        assetFileNames: 'assets/[name]-[hash][extname]',
        
        // Разделение больших зависимостей
        manualChunks: {
          // Можно добавить при использовании библиотек
        }
      }
    }
  },
  
  // Настройки dev-сервера
  server: {
    port: 3000,
    open: true,
    host: true
  },
  
  // Настройки preview
  preview: {
    port: 3001
  },
  
  // Оптимизация ресурсов
  assetsInclude: ['**/*.jpg', '**/*.jpeg', '**/*.png', '**/*.svg', '**/*.webp']
})