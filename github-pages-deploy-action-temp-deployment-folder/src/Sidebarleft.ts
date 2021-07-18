//@ts-ignore
import { defineComponent, ref, watch } from "@vue/composition-api";
import { useinnerhehight } from "./useinnerhehight";
export default defineComponent({
    setup(props) {
        const innerheight = useinnerhehight();

        const sidebar = ref();

        watch(
            () => sidebar.value,
            (value) => props.innerref(value)
        );
        return { sidebar, innerheight };
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
