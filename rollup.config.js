import typescript from '@rollup/plugin-typescript';
import terser from '@rollup/plugin-terser';
import fs from 'node:fs';

const pkg = JSON.parse(fs.readFileSync('./package.json', 'utf-8'));

export default {
  input: 'src/index.ts',
  output: [{
    file: pkg.main,
    format: 'umd',
    name: 'React.useAbort',
    globals: {
      react: 'React',
    },
    sourcemap: true,
  }, {
    file: pkg.module,
    format: 'es',
    sourcemap: true,
  }, {
    file: pkg.module,
    format: 'es',
    sourcemap: true,
  }],
  plugins: [
    typescript(),
    terser(),
  ],
  external: ['react'],
};
