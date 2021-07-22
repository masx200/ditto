export function scrolltoelement(e: Element) {
    // console.log(e.offsetTop);
    e.scrollIntoView({
        behavior: "smooth",

        inline: "center",
        block: "center",
    });
}
