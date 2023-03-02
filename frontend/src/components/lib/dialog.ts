import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";

declare global {
    interface HTMLElementTagNameMap {
        "x-dialog": XDialog;
    }
}

/**
 * The base class for modal/dialogs
 */
@customElement("x-dialog")
export class XDialog extends LitElement {
    static styles = css`
        .modal {
            position: fixed;
            inset: 0px;
            z-index: 99999;
            font-size: 18px;
        }
        .modal .overlay {
            opacity: 0.1;
            position: fixed;
            inset: 0px;
            background: #000;
        }
        .modal .dialog {
            /* dialog is outer div of the dialog box */
            background-color: var(--dialog-bg-color);
            margin: 15% auto;
            max-width: 720px;
            width: 80%;
            position: relative;
            color: var(--dialog-tx-color);
        }
        .modal .dialog .close {
            color: var(--dialog-closex-color);
            float: right;
            font-size: 58px;
            font-weight: bold;
            margin: 30px 15px;
            line-height: 0;
            cursor: pointer;
        }
        slot {
            display: block;
            padding: 34px;
        }
        ::slotted(h2) {
            /* title */
            color: var(--dialog-h2-color);
            margin-top: 0;
        }
    `;

    // declare hide: Boolean;
    // declare overlay: String;
    // declare overlay_click_close: Boolean;
    // static get properties() {
    //     return {
    //         hide: { type: Boolean },
    //         overlay: { type: String },
    //         overlay_click_close: { type: Boolean },
    //     };
    // }

    @property({ type: Boolean })
    declare hide: Boolean;

    @property({ type: String })
    declare overlay: String;

    @property({ type: Boolean })
    declare overlay_click_close: Boolean;

    constructor() {
        super();
        this.hide = false;
        this.overlay = `0.3`; // opacity, empty or 0 has no overlay
        this.overlay_click_close = false;
    }

    overlay_click(e: Event) {
        if (!this.overlay_click_close) return;
        this.hide = true;
    }

    close(e: Event) {
        this.hide = true;
    }

    render() {
        if (this.hide) return;
        return html`
            <div class="modal">
                ${this.overlay ? html`<div class="overlay" style="opacity:${this.overlay}" @click=${this.overlay_click}></div>` : ``}
                <div class="dialog">
                    <span class="close" @click=${this.close}>&times;</span>
                    <slot></slot>
                </div>
            </div>
        `;
    }
}
