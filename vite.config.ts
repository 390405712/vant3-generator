import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from '@vitejs/plugin-vue-jsx';
// import dts from 'vite-plugin-dts'
import VitePluginStyleInject from 'vite-plugin-style-inject';

export default defineConfig({
  build: {
    lib: {
      entry: ['./lib/index.ts'],
      name: 'element-plus-generator',
      formats: ['es'],
      // "commonjs" | "esm" | "module" | "systemjs"
      fileName: (format, entryName) => `${entryName}.js`,
    },
    sourcemap: true,
    rollupOptions: {
      external: ['vue', 'vant'],
      output: {
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
  plugins: [
    vue(),
    vueJsx(),
    VitePluginStyleInject(),
    // dts()
  ],
});