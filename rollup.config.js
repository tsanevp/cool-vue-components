import vue from 'rollup-plugin-vue';
import css from 'rollup-plugin-css-only';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';

export default [
  // ES Module (for Vite-based projects)
  {
    input: 'src/index.js',
    output: {
      format: 'esm',
      file: 'dist/library.mjs',
    },
    plugins: [
      peerDepsExternal(),
      vue({
        css: false,
      }),
      css({ output: 'dist/library.css' }),
    ],
    external: ['vue'],
  },

  // CommonJS Module (for Webpack-based projects)
  {
    input: 'src/index.js',
    output: {
      format: 'cjs',
      file: 'dist/library.cjs',
      exports: 'named',
    },
    plugins: [
      peerDepsExternal(),
      vue({
        css: false,
      }),
      css({ output: 'dist/library.css' }),
    ],
    external: ['vue'],
  },

  // Browser Build (IIFE)
  {
    input: 'src/index.js',
    output: {
      format: 'iife',
      file: 'dist/library.iife.js',
      name: 'CoolVueComponents',
      globals: {
        vue: 'Vue',
      },
    },
    plugins: [
      peerDepsExternal(),
      vue({
        css: false,
      }),
      css({ output: 'dist/library.css' }),
    ],
    external: ['vue'],
  },

  // Server-Side Rendering (SSR) Build
  {
    input: 'src/index.js',
    output: {
      format: 'cjs',
      file: 'dist/library.ssr.cjs',
      exports: 'named',
    },
    plugins: [
      peerDepsExternal(),
      vue({
        css: false,
        template: {
          optimizeSSR: true,
        },
      }),
    ],
    external: ['vue'],
  },
];
