import { LitElement, html, css } from "lit";
import { customElement, property, state } from "lit/decorators.js";

/**
 * Container for all toast elements, added to document once by the toast helper
 * and all toasts will be added as children
 */
@customElement("x-toast-wrap")
class XToastWrap extends LitElement {
    static styles = css`
        :host {
            display: block;
            position: fixed;
            top: 10px;
            right: 10px;
            width: 420px;
            line-height: 1rem;
            z-index: 999;
        }
    `;

    render() {
        return html`<slot></slot>`;
    }
}

@customElement("x-toast")
class XToast extends LitElement {
    static styles = css`
        @keyframes open {
            0% {
                transform: scale(1);
            }
            50% {
                transform: scale(1.4);
            }
            100% {
                transform: scale(1);
            }
        }
        @keyframes close {
            0% {
                transform: translateX(0);
            }
            100% {
                transform: translateX(100%);
            }
        }
        :host {
            display: block;
            position: relative;
            border-radius: 4px;
            padding: 14px 22px;
            margin: 6px 0;
            background: var(--panel-bg-color);
            color: var(--panel-tx-color);
            animation: open 0.3s, close 0.6s 3s;
        }
        :host(.warn) {
            border-left: 6px solid #bd2121;
        }
        :host(.ok) {
            border-left: 6px solid #16bd21;
        }
        :host(.stayopen) {
            animation: open 0.3s;
        }
        :host x-button {
            position: absolute;
            right: 8px;
            top: 8px;
        }
    `;

    @property({ type: String })
    declare type: string;

    @property({ type: Boolean })
    declare showClose: Boolean;

    connectedCallback() {
        super.connectedCallback();
        if (this.type == "warn") this.showClose = true;
        if (this.showClose) return;
        setTimeout(() => {
            this.remove();
        }, 3500);
    }

    _close_btn = function () {
        if (!this.showClose) return;
        return html`<x-button
            class="b4 small"
            icon="3"
            @click=${() => {
                this.remove();
            }}
        ></x-button>`;
    };

    render() {
        if (this.type) this.classList.add(this.type);
        if (this.showClose) this.classList.add("stayopen");
        return html`<slot></slot>${this._close_btn()}`;
    }
}
