import typescript from '@rollup/plugin-typescript';

export default {
  input: 'src/index.ts',
  output: {
    dir: 'dist',
    format: 'umd',
  },
  plugins: [typescript()],
  external: ['react'],
};
