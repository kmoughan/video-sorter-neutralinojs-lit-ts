/**
 * Takes this.childNodes from a component, and returns
 * count of childNodes which match a given nodeName type
 *
 * @param nodes this.childNodes
 * @param type  "X-CUSTOM-NODE", always uppercase
 * @returns number
 */
export default function countNodesByType(nodes: NodeList, type: string): number {
    let c = 0;
    nodes.forEach((n) => {
        if (n.nodeName == type) c++;
    });
    return c;
}
