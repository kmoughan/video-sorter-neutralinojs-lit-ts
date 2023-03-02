import { html, LitElement } from "lit";
import { customElement } from "lit/decorators.js";

@customElement("page-home")
export class PageHome extends LitElement {
    constructor() {
        super();
    }

    render() {
        return html`<div>
            <h1>Home</h1>
            <a href="/">Home</a><br />
            <a href="/doesnt_exist">I should error 404</a>
        </div>`;
    }
}
