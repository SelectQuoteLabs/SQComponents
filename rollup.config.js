import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import {terser} from 'rollup-plugin-terser';
import css from 'rollup-plugin-css-porter';

export default {
  input: 'src/index.js',
  output: [
    {
      file: 'dist/bundle.cjs.min.js',
      format: 'cjs',
    },
    {
      file: 'dist/bundle.esm.min.js',
      format: 'esm',
    },
  ],
  plugins: [
    resolve({
      customResolveOptions: {
        moduleDirectory: 'node_modules',
      },
    }),
    babel({exclude: 'node_modules/**'}),
    terser(),
    css({
      raw: false,
      minified: 'dist/bundle.min.css',
    }),
  ],
  external: [
    'react',
    'react-dom',
    '@material-ui/core',
    'material-ui',
    'prop-types',
    'classnames',
  ],
};
