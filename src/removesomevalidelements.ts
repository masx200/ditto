export function removesomevalidelements(tmpcontainer: Element) {
    Array.from([
        ...tmpcontainer.querySelectorAll("link"),
        ...tmpcontainer.querySelectorAll("style"),
        ...tmpcontainer.querySelectorAll("script"),
        ...tmpcontainer.querySelectorAll("title"),
        ...tmpcontainer.querySelectorAll("meta"),
    ]).forEach((e) => {
        e.remove();
    });
}
