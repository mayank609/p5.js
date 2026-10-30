import { defineConfig } from 'vitest/config';
import vitePluginString from 'vite-plugin-string';
import { createRequire } from 'module';

const require = createRequire(import.meta.url);

export default defineConfig({
  root: './',
  plugins: [
    vitePluginString({
      include: [
        'src/webgl/shaders/**/*'
      ]
    })
  ]
});
