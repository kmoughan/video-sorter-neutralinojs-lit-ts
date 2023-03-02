import { css, html, LitElement } from "lit";
import { customElement } from "lit/decorators.js";
import { dialog } from "../helpers/dialog";
import { toast } from "../helpers/toast";
import { unsafeHTML } from "lit/directives/unsafe-html.js";
import "../components/lib/button";
import "../components/lib/tabs";
import "../components/lib/switch";
import "../components/lib/segmented-buttons";

@customElement("page-developer")
export class PageDeveloper extends LitElement {
    static styles = css`
        h1 {
            text-align: center;
            font-size: 60px;
        }
        .showcase {
            text-align: center;
            margin-bottom: 132px;
        }
        .showcase x-button {
            margin-right: 16px;
            margin-bottom: 16px;
            display: inline-block;
        }
        code {
            font-family: monospace;
            background: var(--panel-bg-color);
            color: var(--panel-tx-color);
            padding: 12px;
            display: block;
            margin: 8px auto;
            width: 900px;
        }
        .showicons li {
            background: #f3f3f3;
            border: 1px solid #555;
            margin: 6px;
            border-radius: 6px;
            font-family: monospace;
            font-size: 12px;
            text-align: center;
            display: inline-block;
            vertical-align: bottom;
        }
        .showicons li .icon {
            font-family: "svgsheet", sans-serif;
            font-size: 96px;
            width: 108px;
            height: 108px;
            line-height: 108px;
            color: #222;
        }
        .showicons .number {
            color: #9b610a;
            font-size: 22px;
        }
        .showicons .unicode {
            color: #9b610a;
            font-size: 14px;
        }
    `;

    tabButtons() {
        return html`
            <h1>Buttons</h1>
            <br />

            <div class="showcase">
                <h2>Base x-buttons</h2>
                <code>
                    &lt;x-button class=&quot;b1&quot;&gt;b1&lt;/x-button&gt;
                    <br />
                    &lt;x-button class=&quot;b1&quot; @click=&quot;&#36;{(e) =&gt; alert('clicked me')}&quot;&gt;b1&lt;/x-button&gt;
                </code>
                <x-button class="b1" @click="${() => alert(`clicked me`)}">b1</x-button>
                <x-button class="b2">b2</x-button>
                <x-button class="b3">b3</x-button>
                <x-button class="b4">b4</x-button>
                <x-button class="b5">b5</x-button>
            </div>

            <div class="showcase">
                <h2>Outline x-buttons</h2>
                <code>&lt;x-button class=&quot;b1 outline&quot;&gt;b1&lt;/x-button&gt;</code>
                <x-button class="b1 outline">b1</x-button>
                <x-button class="b2 outline">b2</x-button>
                <x-button class="b3 outline">b3</x-button>
                <x-button class="b4 outline">b4</x-button>
                <x-button class="b5 outline">b5</x-button>
            </div>

            <div class="showcase">
                <h2>Icon x-buttons</h2>
                <code>
                    &lt;x-button class=&quot;b1&quot; icon=&quot;2&quot;&gt;b1&lt;/x-button&gt;
                    <br />
                    &lt;x-button class=&quot;b5 icon-right&quot; icon=&quot;6&quot;&gt;b5&lt;/x-button&gt;
                </code>
                <x-button class="b1" icon="2">b1</x-button>
                <x-button class="b2" icon="3">b2</x-button>
                <x-button class="b3" icon="4">b3</x-button>
                <x-button class="b4" icon="5">b4</x-button>
                <x-button class="b5 icon-right" icon="6">b5</x-button>
            </div>

            <div class="showcase">
                <h2>Shaped icon x-buttons</h2>
                <code>
                    &lt;x-button class=&quot;b1&quot; icon=&quot;2&quot;&gt;&lt;/x-button&gt;
                    <br />
                    &lt;x-button class=&quot;b5 big round&quot; icon=&quot;5&quot;&gt;&lt;/x-button&gt;
                </code>
                <x-button class="b1" icon="2"></x-button>
                <x-button class="b3 round" icon="2"></x-button>
                <x-button class="b4 small round" icon="2"></x-button>
                <x-button class="b5 big round" icon="5"></x-button>
            </div>

            <div class="showcase">
                <h2>Small x-buttons</h2>
                <code>&lt;x-button class=&quot;b1 small&quot;&gt;b1&lt;/x-button&gt;</code>
                <x-button class="b1 small">b1</x-button>
                <x-button class="b2 small">b2</x-button>
                <x-button class="b3 small">b3</x-button>
                <x-button class="b4 small">b4</x-button>
                <x-button class="b5 small">b5</x-button>
                <x-button class="b1 small" icon="2">w/icon</x-button>
            </div>

            <div class="showcase">
                <h2>Big x-buttons</h2>
                <code>&lt;x-button class=&quot;b1 big&quot;&gt;b1&lt;/x-button&gt;</code>
                <x-button class="b1 big">b1</x-button>
                <x-button class="b2 big">b2</x-button>
                <x-button class="b3 big">b3</x-button>
                <x-button class="b4 big">b4</x-button>
                <x-button class="b5 big">b5</x-button>
                <x-button class="b1 big" icon="1">with icon</x-button>
            </div>

            <code>
                &lt;x-button-bar&gt;<br />&lt;x-button slot=&quot;left&quot; class=&quot;b1&quot;&gt;i&#39;m left&lt;/x-button&gt;<br />&lt;x-button
                class=&quot;b3&quot;&gt;i&#39;m centered&lt;/x-button&gt;<br />&lt;x-button slot=&quot;right&quot; class=&quot;b4&quot;&gt;i&#39;m
                right&lt;/x-button&gt;<br />&lt;x-button slot=&quot;right&quot; class=&quot;b4&quot;&gt;i&#39;m right&lt;/x-button&gt;<br />&lt;/x-button-bar&gt;
            </code>
            <x-button-bar>
                <x-button slot="left" class="b1">i'm left</x-button>
                <x-button class="b3">i'm centered</x-button>
                <x-button slot="right" class="b4">i'm right</x-button>
                <x-button slot="right" class="b4">i'm right</x-button>
            </x-button-bar>
        `;
    }

    tabDialogs() {
        return html`<div>
            <h1>Dialogs</h1>
            <div class="showcase">
                <h2>Toast</h2>
                <code>
                    &lt;x-button class=&quot;b4&quot; @click=\${() =&gt; toast(&quot;clicked&quot;)}&gt;Toast&lt;/x-button&gt;<br />
                    &lt;x-button class=&quot;b4&quot; @click=\${() =&gt; toast(&quot;error oops&quot;, &quot;warn&quot;)}&gt;Toast (warn)&lt;/x-button&gt;<br />
                    &lt;x-button class=&quot;b4&quot; @click=\${() =&gt; toast(&quot;yeah!!&quot;, &quot;ok&quot;)}&gt;Toast (ok)&lt;/x-button&gt;
                </code>
                <x-button-bar>
                    <x-button class="b4" @click=${() => toast("clicked")}>Toast</x-button>
                    <x-button class="b4" @click=${() => toast("error oops", "warn")}>Toast (warn)</x-button>
                    <x-button class="b4" @click=${() => toast("yeah!!", "ok")}>Toast (ok)</x-button>
                </x-button-bar>

                <h2>Alert</h2>
                <code>
                    &lt;x-button class=&quot;b1&quot; icon=&quot;1&quot; @click=\${() =&gt; dialog.alert(&quot;clicked&quot;,
                    &quot;Alert&quot;)}&gt;Alert&lt;/x-button&gt;
                    <br /><br />
                    &lt;x-button slot=&quot;left&quot; class=&quot;b1&quot; icon=&quot;1&quot; @click=\${() =&gt; dialog.alert(&quot;clicked&quot;,
                    &quot;Woah&quot;, () =&gt; {dialog.alert(&quot;i&#39;m a callback&quot;, &quot;It worked&quot;);})}&gt;MyAlert&lt;/x-button&gt;</code
                >
                <x-button-bar>
                    <x-button class="b1" icon="1" @click=${() => dialog.alert("clicked", "Alert")}>Alert</x-button>
                    <x-button
                        class="b1"
                        icon="1"
                        @click=${() =>
                            dialog.alert("clicked", "Woah", () => {
                                dialog.alert("i'm a callback", "It worked");
                            })}
                        >Alert with callback</x-button
                    >
                </x-button-bar>
            </div>

            <div class="showcase">
                <h2>Confirm</h2>
                <code
                    >&lt;x-button class=&quot;b1&quot; icon=&quot;1&quot; @click=\${() =&gt; dialog.confirm(&quot;clicked&quot;, &quot;Woah&quot;, (dataset)
                    =&gt; {dialog.alert("you chose \${dataset.action}", &quot;i&#39;m a callback&quot;);})}&gt;Confirm with callback&lt;/x-button&gt;
                </code>
                <x-button-bar>
                    <x-button
                        class="b1"
                        icon="1"
                        @click=${() =>
                            dialog.confirm("clicked", "Woah", (dataset) => {
                                dialog.alert(`you chose ${dataset.action}`, "i'm a callback");
                            })}
                        >Confirm with callback</x-button
                    >
                </x-button-bar>
            </div>
        </div>`;
    }

    tabForm() {
        return html`<div>
            <h1>Form</h1>

            <div class="showcase">
                <h2>Segmented Buttons</h2>
                <code>
                    &lt;x-seg-btns name=&quot;flight&quot; style=&quot;max-width:400px;height:68px&quot; @changed=\${(e: Event) =&gt; {
                    console.log(&quot;changed&quot;, (e.target as any).value); }} &gt;
                    <br />&lt;x-seg-btn value=&quot;coach&quot;&gt;Coach&lt;/x-seg-btn&gt; <br />&lt;x-seg-btn value=&quot;business&quot; checked&gt;Business
                    Business&lt;/x-seg-btn&gt; <br />&lt;x-seg-btn value=&quot;first&quot;&gt;First&lt;/x-seg-btn&gt; <br />&lt;x-seg-btn
                    value=&quot;steerage&quot;&gt;steerage&lt;/x-seg-btn&gt; <br />&lt;/x-seg-btns&gt;
                </code>
                <div style="text-align:center">
                    <x-seg-btns
                        name="flight"
                        style="max-width:400px;height:68px"
                        @changed=${(e: Event) => {
                            console.log("changed", (e.target as any).value);
                        }}
                    >
                        <x-seg-btn value="coach">Coach</x-seg-btn>
                        <x-seg-btn value="business" checked>Business Business</x-seg-btn>
                        <x-seg-btn value="first">First</x-seg-btn>
                        <x-seg-btn value="steerage">steerage</x-seg-btn>
                    </x-seg-btns>
                </div>
            </div>

            <div class="showcase">
                <h2>Segmented Buttons (with icons)</h2>
                <code>
                    &lt;x-seg-btns name=&quot;flight&quot; style=&quot;max-width:540px&quot; @changed=\${(e: Event) =&gt; { console.log(&quot;changed&quot;,
                    (e.target as any).value); }} &gt;
                    <br />&lt;x-seg-btn value=&quot;coach&quot; icon=&quot;1&quot;&gt;Coach&lt;/x-seg-btn&gt; <br />&lt;x-seg-btn value=&quot;business&quot;
                    icon=&quot;2&quot; checked&gt;Business&lt;/x-seg-btn&gt; <br />&lt;x-seg-btn value=&quot;first&quot;
                    icon=&quot;3&quot;&gt;First&lt;/x-seg-btn&gt; <br />&lt;x-seg-btn value=&quot;steerage&quot;
                    icon=&quot;4&quot;&gt;steerage&lt;/x-seg-btn&gt; <br />&lt;/x-seg-btns&gt;
                </code>
                <div style="text-align:center">
                    <x-seg-btns
                        name="flight"
                        style="max-width:540px"
                        @changed=${(e: Event) => {
                            console.log("changed", (e.target as any).value);
                        }}
                    >
                        <x-seg-btn value="coach" icon="1">Coach</x-seg-btn>
                        <x-seg-btn value="business" icon="2" checked>Business</x-seg-btn>
                        <x-seg-btn value="first" icon="3">First</x-seg-btn>
                        <x-seg-btn value="steerage" icon="4">steerage</x-seg-btn>
                    </x-seg-btns>
                </div>
            </div>

            <div class="showcase">
                <h2>Segmented Buttons (with icons above)</h2>
                <code>
                    &lt;x-seg-btns name=&quot;flight&quot; style=&quot;max-width:540px&quot; @changed=\${(e: Event) =&gt; { console.log(&quot;changed&quot;,
                    (e.target as any).value); }} &gt;
                    <br />&lt;x-seg-btn value=&quot;coach&quot; icon=&quot;1&quot;&gt;Coach&lt;/x-seg-btn&gt; <br />&lt;x-seg-btn value=&quot;business&quot;
                    icon=&quot;2&quot; checked&gt;Business&lt;/x-seg-btn&gt; <br />&lt;x-seg-btn value=&quot;first&quot;
                    icon=&quot;3&quot;&gt;First&lt;/x-seg-btn&gt; <br />&lt;x-seg-btn value=&quot;steerage&quot;
                    icon=&quot;4&quot;&gt;steerage&lt;/x-seg-btn&gt; <br />&lt;/x-seg-btns&gt;
                </code>
                <div style="text-align:center">
                    <x-seg-btns
                        class="icons-above"
                        name="flight"
                        style="max-width:540px"
                        @changed=${(e: Event) => {
                            console.log("changed", (e.target as any).value);
                        }}
                    >
                        <x-seg-btn value="coach" icon="1">Coach</x-seg-btn>
                        <x-seg-btn value="business" icon="2" checked>Business</x-seg-btn>
                        <x-seg-btn value="first" icon="3">First</x-seg-btn>
                        <x-seg-btn value="steerage" icon="4">steerage</x-seg-btn>
                    </x-seg-btns>
                </div>
            </div>

            <div class="showcase">
                <h2>Switch</h2>
                <code>
                    &lt;x-switch @changed=\${(e: Event) =&gt; { console.log(&quot;changed value :: &quot;, (e.target as any).value); }} &gt;&lt;/x-switch&gt;
                </code>
                <div style="text-align:center">
                    <x-switch
                        style="display: inline-block;"
                        @changed=${(e: Event) => {
                            console.log("changed value :: ", (e.target as any).value);
                        }}
                    ></x-switch>
                </div>
            </div>
        </div>`;
    }

    tabIcons() {
        function getIcons() {
            let o = [];
            for (var i = 1; i < 33; i++) {
                let icon = `&#xEA${String(i).padStart(2, "0")};`;
                //let icon = unsafeHTML();
                o.push(
                    html`<li>
                        <div class="icon">${unsafeHTML(icon)}</div>
                        <div class="number">${i}</div>
                        <div class="unicode">${icon}</div>
                    </li>`
                );
            }
            return o;
        }
        return html` <div>
            <h1>Icons</h1>
            <div class="showicons">${getIcons()}</div>
        </div>`;
    }

    tabTabs() {
        return html`
            <h1>Tabs</h1>
            <div class="showcase">
                <x-tabs>
                    <x-tab title="Tab 1">
                        <p>This is the first tab.</p>
                    </x-tab>
                    <x-tab title="Tab 2">
                        <p>This is the second tab.</p>
                    </x-tab>
                    <x-tab title="Tab 3">
                        <p>This is the third tab.</p>
                    </x-tab>
                </x-tabs>
            </div>
        `;
    }

    render() {
        return html`
            <h1>Developer Info</h1>
            <x-tabs>
                <x-tab title="Buttons"> ${this.tabButtons()} </x-tab>
                <x-tab title="Dialogs"> ${this.tabDialogs()} </x-tab>
                <x-tab title="Form"> ${this.tabForm()} </x-tab>
                <x-tab title="Icons"> ${this.tabIcons()} </x-tab>
                <x-tab title="Tabs"> ${this.tabTabs()} </x-tab>
            </x-tabs>
        `;
    }
}
