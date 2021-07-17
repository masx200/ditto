import { defineComponent, ref } from "@vue/composition-api";
import Vue from "vue";
import{scrolltoelement}from"./sidebarscroll"
function onclick(e: MouseEvent) {
    const ele = e.target;
    if (!ele) {
        return;
    }
    //@ts-ignore
    requestIdleCallback(() => {

if(ele instanceof Element){
        scrolltoelement(ele)}
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
