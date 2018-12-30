import typescript from "rollup-plugin-typescript2"
import sourcemaps from "rollup-plugin-sourcemaps"

export default {
  input: "./lib/learn_rollup.ts",
  output: {
    file: "./lib/learn_rollup.mjs",
    format: "es",
    sourcemap: true,
  },

  plugins: [
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
