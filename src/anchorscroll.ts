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
                if (states.firstloaded >= 1) {
                    console.log(ele.offsetTop);
                    ele.scrollIntoView({
                        inline: "center",
                        block: "center",
                    });
                } else {
                    let timer = setInterval(() => {
                        //@ts-ignore
                        requestIdleCallback(() => {
                            console.log(ele.offsetTop);
                            if (
                                Array.from(
                                    document.querySelectorAll("*")
                                ).includes(ele)
                            ) {
                                states.firstloaded++;
                                ele.scrollIntoView({
                                    inline: "center",
                                    block: "center",
                                });
                            }
                        });
                    }, 30);

                    setTimeout(() => {
                        clearInterval(timer);
                    }, 500);
                }
            });
        });
}
//@ts-ignore
import { states } from "./states.ts";
