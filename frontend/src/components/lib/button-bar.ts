import { LitElement, html, css } from "lit";
import { customElement } from "lit/decorators.js";

declare global {
    interface HTMLElementTagNameMap {
        "x-button-bar": XButtonBar;
    }
}

/**
 * <x-button-bar>
 *     <x-button>centered button</x-button>
 *     <x-button slot="left">left button</x-button>
 *     <x-button slot="right">right button</x-button>
 * </x-button-bar>
 */
@customElement("x-button-bar")
class XButtonBar extends LitElement {
    static styles = css`
        :host {
            display: flex;
            // align-items: center;
            // justify-content: space-between;
        }
        slot {
            display: block;
            flex: 1;
            min-width: fit-content;
            text-align: center;
        }
        slot[name="right"] {
            text-align: right;
        }
        slot[name="left"] {
            text-align: left;
        }
        ::slotted(*) {
            margin: 0 5px;
        }
        slot[name="left"]::slotted(*) {
            margin: 0 10px 0 0;
        }
        slot[name="right"]::slotted(*) {
            margin: 0 0 0 10px;
        }
    `;

    render() {
        return html`<slot name="left"></slot><slot></slot><slot name="right"></slot>`;
    }
}
