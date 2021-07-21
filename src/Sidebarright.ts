import { computed, defineComponent, ref, watch } from "@vue/composition-api";
import debounce from "lodash/debounce";
import Vue from "vue";
import { anchorscroll } from "./anchorscroll";
import { useinnerhehight } from "./useinnerhehight";
import { useinnerwidth } from "./useinnerwidth";

export default defineComponent({
    props: ["html", "top"],
    setup(props) {
        const innerheight = useinnerhehight();
        const innerwidth = useinnerwidth();
        const maxheight = computed(() => {
            return (
                String(innerheight.value - props.top.replaceAll("px", "")) +
                "px"
            );
        });
        const sidebarright = ref();
        const left = ref("0px");

        const clientwidth = ref(0);
        const mo = new MutationObserver(
            debounce((mutations) => {
                if (sidebarright.value) {
                    var sidebarele = sidebarright.value;
                    var eleclientwidth = sidebarele.clientWidth;
                    if (eleclientwidth > 0) {
                        clientwidth.value = eleclientwidth;
                    }
                }
            })
        );
        const opts = {
            attributeOldValue: true,
            subtree: true,
            childList: true,
            attributes: true,
        };
        watch(
            () => sidebarright.value,
            (sidebarele) => {
                if (sidebarele) {
                    // console.log(sidebarele);
                    var eleclientwidth = sidebarele.clientWidth;
                    // console.log(eleclientwidth);
                    if (eleclientwidth > 0) {
                        clientwidth.value = eleclientwidth;
                    }
                    mo.observe(sidebarele, opts);
                }
            }
        );

        watch(
            [() => clientwidth.value, () => innerwidth.value],
            ([clientwidth, innerwidth]) => {
                if (clientwidth) {
                    // console.log(clientwidth, innerwidth);

                    if (!clientwidth) {
                        return;
                    }
                    if (innerwidth > 550) {
                        left.value =
                            String(Math.max(0, innerwidth - clientwidth - 20)) +
                            "px";
                    } else {
                        left.value = "0";
                    }
                }
            }
        );
        watch(
            () => props.html,
            () => {
                Vue.nextTick(() => {
                    requestAnimationFrame(() => {
                        if (!sidebarright.value) {
                            return;
                        }
                        const eles = Array.from(
                            sidebarright.value.getElementsByClassName(
                                "sidebar-sub-header"
                            )
                        ) as HTMLElement[];
                        eles.forEach((e) => {
                            e.onclick = onclick;
                        });
                    });
                });
            }
        );
        return { maxheight, sidebarright, left };
    },
});
function onclick() {
    //@ts-ignore
    requestIdleCallback(() => {
        anchorscroll();
    });
}
