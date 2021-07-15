//@ts-ignore
import Vue from "vue";
//@ts-ignore
import { getnavbarheight } from "./getnavbarheight.ts";
//@ts-ignore
import { router } from "./hashrouter.ts";
export { anchorscroll };
function anchorscroll() {
    const params = router.getparams();

    if (Reflect.has(params, "id")) {
        const id = Reflect.get(params, "id");
        if (id === "top") {
            scrollTo(0, 0);
        } else if (id === "bottom") {
            scrollTo(0, document.body.scrollHeight);
        } else {
            scrolltoelementid(id);
        }
    } else {
        window.scrollTo(0, 0);
    }
}
function scrolltoelementid(id: string) {
    const ele = document.getElementById(id);

    ele &&
        requestAnimationFrame(async () => {
            await Vue.nextTick();

            requestAnimationFrame(() => {
                let timer = setInterval(() => {
                    //@ts-ignore
                    requestIdleCallback(() => {
                        console.log(ele.offsetTop);
                        if (
                            Array.from(document.querySelectorAll("*")).includes(
                                ele
                            )
                        ) {
                            ele.scrollIntoView({
                                inline: "center",
                                block: "center",
                            });
                        }
                    });
                }, 30);

                setTimeout(() => {
                    clearInterval(timer);
                }, 200);
            });
        });
}
