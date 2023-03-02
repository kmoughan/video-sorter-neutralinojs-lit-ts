import { html, LitElement } from "lit";
import { customElement } from "lit/decorators.js";

@customElement("page-404")
export class Page404 extends LitElement {
    constructor() {
        super();
    }

    render() {
        return html`<div>
            <h1>404 Error</h1>
            <p>The requested page does not exist</p>
        </div>`;
    }
}
