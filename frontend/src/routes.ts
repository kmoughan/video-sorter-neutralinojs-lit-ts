import { Router } from "@lit-labs/router"; //# https://github.com/lit/lit/tree/main/packages/labs/router
import { html } from "lit";
import { unsafeHTML } from "lit/directives/unsafe-html.js";

import "./templates/layouts/base-layout";

import "./pages/404";
import "./pages/home";
import "./pages/developer";

const renderLayout = function (page: string, layout: string = "base") {
    return unsafeHTML(`<${layout}-layout><${"page-" + page} slot="page"></${"page-" + page}></${layout}-layout>`);
};

export function routes(ctx: any) {
    return new Router(ctx, [
        { path: "/", render: () => renderLayout("home") },
        { path: "/developer", render: () => renderLayout("developer") },
        { path: "/:error", render: () => renderLayout("404") },
    ]);
}
