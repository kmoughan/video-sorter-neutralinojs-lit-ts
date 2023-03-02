//# https://modern-web.dev/docs/dev-server/cli-and-configuration/

import { esbuildPlugin } from "@web/dev-server-esbuild";

export default {
    open: true,
    watch: true,
    rootDir: "./src/",
    appIndex: "./src/index.html",
    nodeResolve: true,
    // nodeResolve: {
    //     exportConditions: ["development"],
    //     dedupe: true,
    // },
    esbuildTarget: "auto",
    plugins: [esbuildPlugin({ ts: true, target: "auto" })],
};
