import svelte from "rollup-plugin-svelte";
import resolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";
import livereload from "rollup-plugin-livereload";
import { terser } from "rollup-plugin-terser";
import typescript from "@rollup/plugin-typescript";
import autoPreprocess from "svelte-preprocess";
import svelteDts from "svelte-dts";
import json from "@rollup/plugin-json";
import pkg from "./package.json";

const production = !process.env.ROLLUP_WATCH;

export default [
  {
    input: "src/dev/main.ts",
    output: {
      sourcemap: true,
      format: "iife",
      name: "app",
      file: "public/build/bundle.js",
    },
    plugins: [
      json(),
      svelte({
        dev: !production,
        css: (css) => css.write("bundle.css"),
        preprocess: autoPreprocess(),
      }),
      typescript({ sourceMap: !production }),
      resolve({
        browser: true,
        dedupe: (importee) =>
          importee === "svelte" || importee.startsWith("svelte/"),
      }),
      commonjs(),
      !production && serve(),
      !production && livereload("public"),
      production && terser(),
    ],
    watch: { clearScreen: false },
  },
  {
    input: "src/lib/InfiniteScroll.svelte",
    output: { file: pkg.main, format: "umd", name: "InfiniteScroll" },
    plugins: [
      svelte({ preprocess: autoPreprocess() }),
      typescript({ sourceMap: !production }),
      resolve(),
      commonjs(),
    ],
  },
  {
    input: "src/lib/InfiniteScroll.svelte",
    output: { file: pkg.module, format: "es" },
    external: ["svelte/internal"],
    plugins: [
      svelteDts({ output: pkg.types }),
      svelte({ preprocess: autoPreprocess() }),
      typescript({ sourceMap: !production }),
      commonjs(),
    ],
  },
];

function serve() {
  let started = false;

  return {
    writeBundle() {
      if (!started) {
        started = true;

        require("child_process").spawn("npm", ["run", "start", "--", "--dev"], {
          stdio: ["ignore", "inherit", "inherit"],
          shell: true,
        });
      }
    },
  };
}
