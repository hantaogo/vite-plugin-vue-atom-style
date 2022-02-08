import resolve from 'rollup-plugin-node-resolve';
import { terser }  from 'rollup-plugin-terser';

export default {
  input: 'src/index.js',
  output: {
    file: 'dist/index.js',
    format: 'cjs',
    sourcemap: true,
  },
  plugins: [
    resolve(),
    terser(),
  ],
  external: [
    '@vue/compiler-dom',
    '@vue/compiler-sfc',
  ]
};