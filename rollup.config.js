import external from "rollup-plugin-peer-deps-external";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import postcss from "rollup-plugin-postcss";
import dts from "rollup-plugin-dts";
import del from "rollup-plugin-delete";

export default [
  {
    input: "src/index.ts",
    output: [
      {
        file: "dist/cjs/index.js",
        format: "cjs",
        sourcemap: true
      },
      {
        file: "dist/esm/index.js",
        format: "esm",
        sourcemap: true  
      }
    ],
    plugins: [
      del({ targets: "dist/*", verbose: true }),
      external(),
      resolve(),
      commonjs(),
      typescript(),
      postcss({ modules: true })
    ]
  },
  {
    input: "dist/esm/types/index.d.ts",
    output: [ { file: "dist/index.d.ts", format: "esm" }],
    plugins: [ dts() ],
    external: [ /\.s?css$/ ]
  }
];
