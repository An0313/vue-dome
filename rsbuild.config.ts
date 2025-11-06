import { defineConfig } from '@rsbuild/core';
import { pluginVue } from '@rsbuild/plugin-vue';
import postcssPxToViewport from 'postcss-px-to-viewport';

export default defineConfig({
  plugins: [pluginVue()],
  css: {
    preprocessor: {
      less: {
        // Less 配置
      },
    },
    postcss: {
      plugins: [
        postcssPxToViewport({
          viewportWidth: 375,
          viewportHeight: 667,
          unitPrecision: 3,
          viewportUnit: 'vw',
          selectorBlackList: ['.ignore', '.hairlines'],
          minPixelValue: 1,
          mediaQuery: false,
        }),
      ],
    },
  },
  html: {
    meta: {
      viewport: 'width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no',
    },
  },
});
