import { LitElement, html, css } from "lit";
import { customElement, property, query } from "lit/decorators.js";
import { XDialog } from "./dialog";
import { unsafeHTML } from "lit/directives/unsafe-html.js";

declare global {
    interface HTMLElementTagNameMap {
        "x-alert-confirm": XAlertConfirm;
    }
}

@customElement("x-alert-confirm")
export class XAlertConfirm extends LitElement {
    static styles = css``;

    @property({ type: Boolean })
    declare hide: Boolean;

    @property({ type: String })
    declare type: string; // alert or confirm

    @property({ type: String })
    declare message: string;

    @property({ type: String })
    declare heading: string;

    @property({ type: Function })
    declare onAction: Function;

    @query("x-alert-confirm")
    declare parentDialog: XDialog;

    /**
     * Handle actions for all buttons with a single callback
     * callback passes back all data- args
     * @param e
     */
    action(e: Event) {
        let dataset = (e.target as any).dataset;
        //if (dataset.action == "close")
        this.remove();
        if (this.onAction) this.onAction(dataset);
    }

    isConfirm() {
        if (this.type == "confirm") return html`<x-button slot="right" class="b1" icon="2" data-action="ok" @click=${this.action}>ok</x-button>`;
        return;
    }

    render() {
        if (this.hide) return;
        return html`
            <x-dialog overlay_click_close>
                ${this.heading ? html`<h2>${this.heading}</h2>` : ``}
                <p>${unsafeHTML(this.message)}</p>
                <x-button-bar>
                    <x-button slot="right" class="b5" icon="3" data-action="close" @click=${this.action}>close</x-button>
                    ${this.isConfirm()}
                </x-button-bar>
            </x-dialog>
        `;
    }
}
