import { rollupPluginHTML as html } from "@web/rollup-plugin-html";
import typescript from "@rollup/plugin-typescript";
import { copy } from "@web/rollup-plugin-copy";
import resolve from "@rollup/plugin-node-resolve";
import terser from "@rollup/plugin-terser";
import minifyHTML from "rollup-plugin-minify-html-literals-v3";
import summary from "rollup-plugin-summary";

export default {
    plugins: [
        // Entry point for application build; can specify a glob to build multiple
        // HTML files for non-SPA app
        html({
            input: "./src/index.html",
        }),
        // Resolve bare module specifiers to relative paths
        resolve(),
        typescript(),
        // Minify HTML template literals
        minifyHTML(),
        // Minify JS
        terser({
            ecma: 2020,
            module: true,
            warnings: true,
            output: {
                comments: false,
            },
            mangle: {
                properties: {
                    regex: /^__/,
                },
            },
        }),
        // Print bundle summary
        summary(),
        // Optional: copy any static assets to build directory
        copy({
            patterns: ["images/**/*"],
        }),
    ],
    output: {
        dir: "build",
    },
    preserveEntrySignatures: "strict",
};
