import { defineComponent, ref } from "@vue/composition-api";
import Vue from "vue";

function onclick(e: MouseEvent) {
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
behavior:"smooth",
                    inline: "center",
                    block: "center",
                },
            ]);
        }
    });
}
export default defineComponent({
    setup() {
        const container = ref();
        return { container };
    },
    methods: {},
    props: ["html"],

    watch: {
        async html(value) {
            await Vue.nextTick();
            requestAnimationFrame(() => {
                const eles = Array.from(
                    this.container.getElementsByClassName("scrollIntoView")
                ) as HTMLElement[];

                eles.forEach((e: HTMLElement) => {
                    e.onclick = onclick;
                });
            });
        },
    },
});
