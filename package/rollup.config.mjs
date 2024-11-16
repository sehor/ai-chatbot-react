// rollup.config.mjs

import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import terser from '@rollup/plugin-terser';
import postcss from 'rollup-plugin-postcss';
import dts from 'rollup-plugin-dts';
import { readFileSync } from 'fs';

const pkg = JSON.parse(readFileSync(new URL('./package.json', import.meta.url)));

export default [
  {
    input: 'src/index.ts',
    output: [
      {
        file: pkg.main,
        format: 'cjs',
        sourcemap: true,
      },
      {
        file: pkg.module,
        format: 'esm',
        sourcemap: true,
      }
    ],
    plugins: [
      resolve(),
      commonjs(),
      typescript({ 
        tsconfig: './tsconfig.json',
        declaration: false, // We'll handle declarations separately
        exclude: ['**/__tests__/**']
      }),
      postcss(),
      terser(),
    ],
    external: ['react', 'react-dom', 'ai/react']
  },
  // Types bundle
  {
    input: 'src/index.ts',
    output: {
      file: 'ai-chatbot/types/index.d.ts',
      format: 'es'
    },
    plugins: [dts()],
    external: [/\.css$/] // Exclude CSS files from type definitions
  }
];