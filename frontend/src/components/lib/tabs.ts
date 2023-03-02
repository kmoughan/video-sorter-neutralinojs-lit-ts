import { LitElement, html, css } from "lit";
import { customElement } from "lit/decorators.js";

function partMap(parts) {
    return Object.entries(parts)
        .filter(([key, value]) => value)
        .map(([key, value]) => key)
        .join(" ");
}

interface ITabElement extends Element {
    selected: boolean;
    title: string;
}

/**
 * Tabbed panels
 */
@customElement("x-tabs")
class XTabs extends LitElement {
    static styles = css`
        :host,
        slot {
            display: block;
        }
        span {
            display: inline-block;
        }
        :host::part(tab-bar) {
            display: flex;
        }
        :host::part(content) {
            border: 1px solid var(--tabs-border-color);
            padding: 15px;
        }
        :host::part(tab) {
            /* inactive tabs */
            user-select: none;
            margin-right: -1px;
            //margin-bottom: -1px;
            border: 1px solid var(--tabs-border-color);
            border-bottom: 0;
            padding: 10px 15px;
            cursor: pointer;
            background: var(--tabs-inactive-bg-color);
            color: var(--tabs-inactive-tx-color);
        }
        :host::part(tab-selected) {
            /* active tab */
            background: var(--tabs-active-bg-color);
            color: var(--tabs-active-tx-color);
        }
    `;

    get tabs(): ITabElement[] {
        const slot = this.shadowRoot.querySelector("slot");
        return slot ? (slot.assignedElements() as any) : [];
    }

    selectTab(selected: ITabElement): void {
        for (let tab of this.tabs) tab.selected = tab == selected;
        this.requestUpdate();
    }

    firstUpdated(): void {
        super.firstUpdated(null);
        this.tabs.find((tab) => tab.selected) || this.selectTab(this.tabs[0]);
    }

    render() {
        return html`
            <nav part="tab-bar">
                ${this.tabs.map(
                    (tab) => html`
                        <span part=${partMap({ tab: true, "tab-selected": tab.selected })} @click=${() => this.selectTab(tab)}> ${tab.title} </span>
                    `
                )}
            </nav>

            <slot part="content" @slotchange=${() => this.requestUpdate()}></slot>
        `;
    }
}

@customElement("x-tab")
class XTab extends LitElement {
    static styles = css`
        :host(:not([selected])) {
            display: none;
        }
    `;

    static get properties() {
        return {
            title: { type: String, reflect: true },
            selected: { type: Boolean, reflect: true },
        };
    }

    render() {
        return html`<slot></slot>`;
    }
}
