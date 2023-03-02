import { LitElement, html, css, TemplateResult } from "lit";
import { customElement, property } from "lit/decorators.js";
import countNodesByType from "../../helpers/count-nodes-by-type";
import getIconHTML from "../../helpers/get-icon-html";
import getNodesByType from "../../helpers/get-nodes-by-type";

declare global {
    interface HTMLElementTagNameMap {
        "x-seg-btns": XSegmentedButtons;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        "x-seg-btn": XSegmentedButton;
    }
}

@customElement("x-seg-btns")
class XSegmentedButtons extends LitElement {
    static styles = (function () {
        return css`
            :host {
                display: flex;
                align-items: center;
                position: relative;
                user-select: none;
                z-index: 1;
                margin: 0 auto;
                border-radius: 4px;
                color: #f3f3f3;
                background: #616d78;
            }
            input {
                display: none;
            }
            input:checked + label {
                color: #222;
            }
            label {
                cursor: pointer;
                padding: 6px 3px;
                display: flex;
                align-items: center;
                justify-content: center;
                width: 100%;
                height: 100%;
            }
            x-seg-btn {
                display: flex;
                height: 100%;
                align-items: center;
                justify-content: center;
                flex: 1;
                transition: color 250ms cubic-bezier(0, 0.95, 0.38, 0.98);
            }
            x-seg-btn:last-of-type:before {
                /* checked label */
                content: "";
                display: block;
                margin: 0px;
                position: absolute;
                top: 0;
                right: 0;
                bottom: 0;
                left: 0;
                z-index: -1;
                background: #2196f3;
                transition: all 250ms cubic-bezier(0, 0.95, 0.38, 0.98);
                transform: translateX(0);
            }
            x-seg-btn:not(:last-of-type) {
                /* border between buttons */
                border-right: 1px solid #222;
            }
            i {
                font-family: svgsheet;
                font-style: normal;
                margin-right: 12px;
                vertical-align: middle;
            }
            :host(.icons-above) label {
                flex-direction: column;
            }
            :host(.icons-above) i {
                margin: 0;
            }
        `;
    })();

    connectedCallback() {
        super.connectedCallback();
        this._childBtns = getNodesByType(this.childNodes, "X-SEG-BTN");
        this._changeEvent = new Event("changed", { bubbles: true, composed: true });
    }

    @property({ type: String })
    name: string;

    private _changeEvent: Event;
    private _childBtns: Node[];
    value: string;

    _genStyle(count: number) {
        let sty = [];
        sty.push(`x-seg-btn:last-of-type:before {max-width: ${100 / count}%}`);
        sty.push(`x-seg-btn:nth-of-type(${count}).checked:before {transform: translateX(calc(${100 * (count - 1)}% + 0px));}`); // last x-seg-btn
        for (let i = 0; i < count - 1; i++) {
            let n = i + 1;
            sty.push(`x-seg-btn:nth-of-type(${n}).checked ~ x-seg-btn:last-of-type:before {transform: translateX(calc(${100 * i}% + 0px));}`);
        }
        return sty.join("");
    }

    initialChecked() {
        this._childBtns.forEach((node) => {
            if ((node as any).checked) (node as any).classList.add("checked");
        });
    }

    uncheckALl() {
        this._childBtns.forEach((node) => {
            (node as any).classList.remove("checked");
            (node as any).checked = false;
        });
    }

    onChange() {
        //this.value = (e.target as any).checked;
        this._childBtns.forEach((node) => {
            if ((node as any).checked) this.value = (node as any).value;
        });
        this.dispatchEvent(this._changeEvent);
        //console.log("this.value", this.value);
    }

    render() {
        this.initialChecked();
        let count = countNodesByType(this.childNodes, "X-SEG-BTN");
        this.shadowRoot.append(...(this.childNodes as any));

        return html`
            <style>
                ${this._genStyle(count)}
            </style>
        `;
    }
}

@customElement("x-seg-btn")
class XSegmentedButton extends LitElement {
    static styles = css``;
    txt: string;

    @property({ type: String })
    value: string;

    //@property({ type: Boolean, reflect: true })
    checked: boolean = false;

    @property({ type: String })
    icon: string;

    createRenderRoot() {
        return this;
    }

    render() {
        let parentName = (this.parentNode as any).host.name;
        let id = `${parentName}_${this.value}`;
        if (!this.txt) {
            this.txt = (this.childNodes[0] as any).data;
            this.removeChild(this.childNodes[0]);
        }
        let icon: TemplateResult;
        if (this.icon) {
            icon = getIconHTML(this.icon);
        }
        return html`
            <input
                type="radio"
                name="${parentName}"
                value="${this.value}"
                id="${id}"
                ?checked=${this.checked}
                @click=${() => {
                    let host = (this.parentNode as any).host;
                    host.uncheckALl();
                    this.classList.add("checked");
                    this.checked = true;
                    host.onChange();
                }}
            />
            <label for="${id}">${icon}${this.txt}</label>
        `;
    }
}
