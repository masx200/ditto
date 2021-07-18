export function removesomevalidelements(tmpcontainer: Element) {
    const tags = ["link", "style", "script", "title", "meta"];

    const eles = tags
        .map((t) => Array.from(tmpcontainer.querySelectorAll(t)))
        .flat();
    eles.forEach((e) => {
        e.remove();
    });
}
