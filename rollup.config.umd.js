import resolve from "rollup-plugin-node-resolve"
import commonjs from "rollup-plugin-commonjs"
import typescript from "rollup-plugin-typescript2"
import sourcemaps from "rollup-plugin-sourcemaps"

export default {
  input: "./lib/learn_rollup.ts",
  output: {
    file: "./umd/learn_rollup.js",
    format: "umd",
    name: "window",
    extend: true,
    sourcemap: true,
  },

  plugins: [
    resolve(),
    commonjs(),
    typescript({
      tsconfig: "./lib/tsconfig.json",
      tsconfigOverride: {
        compilerOptions: {
          module: "es2015",
          declaration: false,
        },
      },
    }),
    sourcemaps(),
  ],
}
