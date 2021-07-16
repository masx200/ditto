//@ts-ignore
import { debounce } from "./debounce.ts";
import {
    defineComponent,
    ref,
    onUnmounted,
    onMounted,
} from "@vue/composition-api";
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
    props: ["html", "top"],
});
export function useinnerhehight() {
    const height = ref(window.innerHeight);
    const listener = debounce(() => {
        requestAnimationFrame(() => {
            height.value = window.innerHeight;
        });
    });
    onMounted(() => {
        window.addEventListener("resize", listener);
    });
    onUnmounted(() => {
        window.removeEventListener("resize", listener);
    });
    return height;
}
