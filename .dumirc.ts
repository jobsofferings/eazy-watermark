import { defineConfig } from 'dumi';

export default defineConfig({
  title: 'eazy-watermark',
  outputPath: 'dist',
  themeConfig: {
    name: 'eazy-watermark',
  },
  cssLoader: {
    modules: {
      auto: /\.module\.\w+$/i,
    },
  },
});
