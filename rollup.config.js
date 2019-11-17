import svelte from "rollup-plugin-svelte";
import resolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";
import pkg from "./package.json";

export default [
  {
    input: "src/index.svelte",
    output: { file: pkg.main, format: "umd", name: "FullScreen" },
    plugins: [svelte(), resolve(), commonjs()]
  },
  {
    input: "src/index.svelte",
    output: { file: pkg.module, format: "es" },
    external: ["svelte/internal"],
    plugins: [svelte(), commonjs()]
  }
];
