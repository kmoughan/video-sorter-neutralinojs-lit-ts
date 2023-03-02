import { LitElement, html, css } from "lit";
import { customElement } from "lit/decorators.js";

@customElement("base-layout")
export default class BaseLayout extends LitElement {
    static styles = css`
        body {
            display: flex;
            flex-direction: column;
            padding: 12px;
        }

        section {
            display: flex;
            flex-grow: 1;
        }

        main {
            flex-grow: 1;
        }

        footer,
        header {
            display: flex;
            align-items: center;
            justify-content: center;
        }

        footer,
        header,
        main,
        aside {
            margin: 2px;
            padding: 10px;
            font-size: 14px;
        }
        header {
            border-bottom: 4px solid var(--border-color);
        }

        aside {
            /* right column can be used if needed */
            width: 30vw;
            display: none;
        }
        nav a {
            display: inline-block;
            text-decoration: none;
            color: var(--navbar-tx-color);
            border: 1px double var(--navbar-border-color);
            padding: 12px;
            margin: 0 8px;
            line-height: 8px;
        }
        nav a:hover {
            filter: brightness(85%);
        }
        nav a:active {
            background-color: #eee;
            color: #000;
        }
    `;

    render() {
        const _header = html`
            <nav>
                <a href="/">Home</a>
                <a href="/main">Main</a>
                <a href="/developer">Developer</a>
            </nav>
        `;

        return html`
            <header>${_header}</header>
            <section>
                <main><slot name="page"></slot></main>
                <!-- <aside>aside</aside> -->
            </section>
            <footer></footer>
            <x-switch
                style="display:inline-block; transform: scale(0.7);position: absolute;top: 0;right: 10px;"
                @changed=${(e: Event) => {
                    document.body.classList.toggle("light");
                }}
                >Dark Mode</x-switch
            >
        `;
    }
}
