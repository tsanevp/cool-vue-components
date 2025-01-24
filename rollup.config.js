import vue from 'rollup-plugin-vue';
import css from 'rollup-plugin-css-only';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';

export default [
  {
    input: 'src/index.js',
    output: [
      {
        format: 'esm',
        file: 'dist/library.mjs',
      },
      {
        format: 'cjs',
        file: 'dist/library.js',
      },
      {
        format: 'iife',
        file: 'dist/library.iife.js',
        name: 'cool-vue-components',
        globals: {
          vue: 'Vue',
        },
      },
    ],
    plugins: [
      peerDepsExternal(), 
      vue({
        css: false, 
        template: {
          optimizeSSR: true,
        },
      }),
      css({ output: 'dist/library.css' }),
    ],
    external: ['vue'],
  },
];
