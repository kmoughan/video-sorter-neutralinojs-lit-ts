import { LitElement, html, css, TemplateResult } from "lit";
import { customElement, property } from "lit/decorators.js";
import getIconHTML from "../../helpers/get-icon-html";

declare global {
    interface HTMLElementTagNameMap {
        "x-button": XButton;
    }
}

/**
 * <x-button class="b1 big round outline" icon="1" @click=${() => alert("clicked")}>Alert</x-button>
 */
@customElement("x-button")
class XButton extends LitElement {
    static styles = css`
        button {
            line-height: 20px;
            cursor: pointer;
            padding: 18px 22px;
            border: 0;
            border-radius: 4px;
            min-width: 140px;
            font-size: 20px;
            vertical-align: bottom;
        }
        button:hover {
            filter: brightness(85%);
        }
        button:active {
            filter: brightness(120%);
        }
        :host(.small) button {
            padding: 4px 8px;
            min-width: unset;
            font-size: 14px;
        }
        :host(.big) button {
            padding: 16px;
            min-width: 220px;
            font-size: 24px;
        }
        :host(.outline) button {
            padding: 16px 8px; /* must be 2px less than button padding */
            border-width: 2px;
            border-style: solid;
            background: transparent !important;
        }
        :host(.b1) button {
            background-color: var(--btn-color-bg-1);
            color: var(--btn-color-tx-1);
        }
        :host(.b1.outline) button {
            border-color: var(--btn-color-bg-1);
            color: var(--btn-color-bg-1);
        }

        :host(.b2) button {
            /* secondary */
            background-color: var(--btn-color-bg-2);
            color: var(--btn-color-tx-2);
        }
        :host(.b2.outline) button {
            border-color: var(--btn-color-bg-2);
            color: var(--btn-color-bg-2);
        }

        :host(.b3) button {
            background-color: var(--btn-color-bg-3);
            color: var(--btn-color-tx-3);
        }
        :host(.b3.outline) button {
            border-color: var(--btn-color-bg-3);
            color: var(--btn-color-bg-3);
        }

        :host(.b4) button {
            background-color: var(--btn-color-bg-4);
            color: var(--btn-color-tx-4);
        }
        :host(.b4.outline) button {
            border-color: var(--btn-color-bg-4);
            color: var(--btn-color-bg-4);
        }

        :host(.b5) button {
            background-color: var(--btn-color-bg-5);
            color: var(--btn-color-tx-5);
        }
        :host(.b5.outline) button {
            border-color: var(--btn-color-bg-5);
            color: var(--btn-color-bg-5);
        }
        /* icon buttons */
        i {
            font-family: svgsheet;
            font-style: normal;
            float: left;
            font-size: 28px;
            min-width: 64px;
            margin-left: -20px;
        }
        :host(.small) button i {
            font-size: 18px;
            min-width: 30px;
        }
        :host(.big) button i {
            font-size: 46px;
            /* min-width: 44px; */
        }
        :host(.small) button.empty {
            padding: 4px 0;
        }
        button.empty {
            min-width: 48px;
        }
        button.empty i {
            min-width: fit-content;
            margin-left: 0;
        }
        :host(.round) button {
            min-width: 48px;
            border-radius: 50%;
        }
        :host(.small.round) button.empty {
            line-height: 26px;
            min-width: 0;
        }
        :host(.small.round) button.empty i {
            min-width: 0;
        }
        :host(.big.round) button.empty {
            line-height: 46px;
        }
        :host(.icon-right) i {
            float: right;
        }
    `;

    @property({ type: String })
    icon: string = "";

    render() {
        let slot: TemplateResult;
        let icon: TemplateResult;
        let classes = "";
        if (this.icon) {
            icon = getIconHTML(this.icon);
        }
        if (this.childNodes.length) {
            // button has children
            slot = html`<slot></slot>`;
        } else classes = `empty`;
        return html` <button class="${classes}">${icon}${slot}</button> `;
    }
}
