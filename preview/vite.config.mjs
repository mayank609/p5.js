import { defineConfig } from 'vite';
import { string } from 'rollup-plugin-string';
import { createRequire } from 'module';

const require = createRequire(import.meta.url);

export default defineConfig({
  root: './',
	appType: 'mpa',
  plugins: [
    string({
      include: [
        'src/webgl/shaders/**/*'
      ]
    })
  ]
});
