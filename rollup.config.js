import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import commonjs from '@rollup/plugin-commonjs'
import typescript from 'rollup-plugin-typescript2'
import strip from '@rollup/plugin-strip'
import resolve from '@rollup/plugin-node-resolve'
import { terser } from 'rollup-plugin-terser'

// this override is needed because Module format cjs does not support top-level await
// eslint-disable-next-line @typescript-eslint/no-var-requires
const pkg = require('./package.json')

export default [
  {
    input: 'src/index.ts',
    output: [
      {
        file: pkg.main,
        format: 'cjs',
        sourcemap: false,
      },
      {
        file: pkg.module,
        format: 'esm', //ES Modules
        sourcemap: false,
      },
    ],
    external: Object.keys(pkg.dependencies || {}),
    plugins: [
      peerDepsExternal(),
      resolve(),
      commonjs(),
      typescript({
        useTsconfigDeclarationDir: true,
      }),
      strip({
        labels: ['unittest'],
      }),
      terser(),
    ],
  },
]
