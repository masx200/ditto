//@ts-ignore
import { defineComponent } from "@vue/composition-api";
import { useinnerhehight } from "./useinnerhehight";
export default defineComponent({
    setup() {
        const innerheight = useinnerhehight();
        return { innerheight };
    },
    computed: {
        maxheight(): string {
            //@ts-ignore
            const { top, innerheight } = this;
            return String(innerheight - top.replaceAll("px", "")) + "px";
        },
    },
    props: ["html", "top", "innerref"],
});
