import { LitElement, html, css } from "lit";
import { customElement } from "lit/decorators.js";

declare global {
    interface HTMLElementTagNameMap {
        "x-switch": XSwitch;
    }
}

@customElement("x-switch")
class XSwitch extends LitElement {
    static styles = css`
        :host {
            line-height: 34px;
        }
        /* The switch - the box around the slider */
        label {
            position: relative;
            display: inline-block;
            width: 60px;
            height: 34px;
        }

        /* Hide default HTML checkbox */
        label input {
            opacity: 0;
            width: 0;
            height: 0;
        }

        /* The slider/background */
        span {
            position: absolute;
            cursor: pointer;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-color: #616d78;
            -webkit-transition: 0.4s;
            transition: 0.4s;
            border-radius: 4px;
        }

        span:before {
            position: absolute;
            font-family: svgsheet;
            content: ""; // x
            height: 26px;
            display: inline-block;
            width: 26px;
            text-align: center;
            font-size: 18px;
            line-height: 26px;
            color: #f3f3f3;
            left: 4px;
            bottom: 4px;
            background-color: #222;
            transition: 0.4s;
            border-radius: 4px;
        }

        input:checked + span {
            background-color: #2196f3;
        }
        input:checked + span:before {
            content: ""; // tick
            font-size: 22px;
            background: #5bdd5b;
            color: #0a6e0e;
        }

        input:checked + span:before {
            transform: translateX(26px);
        }

        /* Rounded sliders */
        // span.round {
        //     border-radius: 34px;
        // }

        // span.round:before {
        //     border-radius: 50%;
        // }
    `;

    private _changeEvent: Event;
    value: boolean;

    connectedCallback() {
        super.connectedCallback();
        this._changeEvent = new Event("changed", { bubbles: true, composed: true });
    }

    _onChange(e: Event) {
        this.value = (e.target as any).checked;
        this.dispatchEvent(this._changeEvent);
    }

    render() {
        return html`
            <slot></slot>
            <label>
                <input type="checkbox" @change=${this._onChange} />
                <span></span>
            </label>
        `;
    }
}
