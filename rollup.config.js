// import  terser from '@rollup/plugin-terser'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import json from '@rollup/plugin-json'
import commonjs from '@rollup/plugin-commonjs'
import typescript from 'rollup-plugin-typescript2';
import swc from '@rollup/plugin-swc';

export default {
    input: 'src/index.ts',
    output: [
        {
            file: 'dist/index.js',
            format: 'cjs'
        },
        {
            file: 'dist/index.esm.js',
            format: 'esm'
        },
        {
            file: 'dist/index.umd.js',
            format: 'umd',
            name: 'dateFnsFormat'
        }
    ],
    plugins: [
        nodeResolve(),
        commonjs(),
        json(),
        typescript(),
        swc(),
    ],
    external: [
        'date-fns'
    ]
}
