import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import ElementPlus from 'unplugin-element-plus/vite'
import path from 'path'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

export default defineConfig({
  root: path.resolve(__dirname, 'src/renderer'),
  base: './',
  plugins: [vue(),
    ElementPlus({
        useSource : false
    }),
    AutoImport({
        resolvers: [ElementPlusResolver()],
      }),
      Components({
        resolvers: [ElementPlusResolver()],
      }),
  ],
  build: {
    outDir: path.resolve(__dirname, 'dist/renderer'),
    emptyOutDir: true,
    rollupOptions : {
        preserveEntrySignatures: "allow-extension",
        external : [ 'fs' , 'os', 'path' ]
    }
  },
})
