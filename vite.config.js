import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { visualizer } from 'rollup-plugin-visualizer'
import legacy from '@vitejs/plugin-legacy'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '/src')
    }
  },
  plugins: [
    vue(),
    legacy({
      targets: [
        'ie >= 11',
        'Android > 39',
        'Chrome >= 60',
        'Safari >= 10.1',
        'iOS >= 10.3',
        'Firefox >= 54',
        'Edge >= 15'
      ],
      additionalLegacyPolyfills: ['regenerator-runtime/runtime']
    }),
    visualizer({
      open: true,
      template: 'sunburst'
    })
  ]
})
