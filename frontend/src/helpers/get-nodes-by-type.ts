/**
 * Takes this.childNodes from a component, and returns
 * an array of childNodes which match a given nodeName type
 *
 * @param nodes this.childNodes
 * @param type  "X-CUSTOM-NODE", always uppercase
 * @returns [] of childNodes
 */
export default function getNodesByType(nodes: NodeList, type: string): Node[] {
    let a: Node[] = [];
    nodes.forEach((n) => {
        if (n.nodeName == type) a.push(n);
    });
    return a;
}
