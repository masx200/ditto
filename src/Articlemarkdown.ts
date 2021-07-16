import { defineComponent, ref } from "@vue/composition-api";
import Vue from "vue";
export default defineComponent({
    setup() {
        const container = ref();
        return { container };
    },
    methods: {
        onclick(e: MouseEvent) {
            const ele = e.target;
            if (!ele) {
                return;
            }
            //@ts-ignore
            requestIdleCallback(() => {
                const scrollIntoView = Reflect.get(ele, "scrollIntoView");

                if ("function" === typeof scrollIntoView) {
                    Reflect.apply(scrollIntoView, ele, [
                        {
                            inline: "center",
                            block: "center",
                        },
                    ]);
                }
                //  ele?.scrollIntoView();
            });
        },
    },
    props: ["html"],

    watch: {
        async html(value) {
            const th = this;
            await Vue.nextTick();
            requestAnimationFrame(() => {
                const eles = Array.from(
                    this.container.getElementsByClassName("scrollIntoView")
                ) as HTMLElement[];

                eles.forEach((e: HTMLElement) => {
                    e.onclick = th.onclick;
                });
            });
        },
    },
});
