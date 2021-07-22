import { scrolltoelement } from "./scrolltoelement";

export function scrolltoactiveelements() {
    document.querySelectorAll("a.active").forEach((e) => {
        //@ts-ignore
        requestIdleCallback(() => {
            requestAnimationFrame(() => {
                scrolltoelement(e);
            });
        });
    });
}
