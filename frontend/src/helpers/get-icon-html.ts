import { html, TemplateResult } from "lit";
import { unsafeHTML } from "lit/directives/unsafe-html.js";

/**
 * Returns a html`<i></i>` object unicode icon character inside
 *
 * @param icon_number from svgsheet font
 * @returns TemplateResult
 */
export default function getIconHTML(icon_number: string): TemplateResult {
    return html`<i>${unsafeHTML(`&#xEA${String(icon_number).padStart(2, "0")};`)}</i>`;
}
