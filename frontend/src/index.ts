import { LitElement } from "lit";
import { customElement } from "lit/decorators.js";
import { routes } from "./routes";

// needed for firefox
import { URLPattern } from "urlpattern-polyfill";
(globalThis as any).URLPattern = URLPattern;

@customElement("x-app")
class App extends LitElement {
    private _routes = routes(this);

    render() {
        return this._routes.outlet();
    }
}
