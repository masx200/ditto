import { onUnmounted } from "@vue/composition-api";
//@ts-ignore
import { onMounted, ref } from "./compositionvue.ts";
//@ts-ignore
import { debounce } from "./debounce.ts";

export function useinnerwidth() {
    const width = ref(window.innerWidth);
    const listener = debounce(() => {
        requestAnimationFrame(() => {
            width.value = window.innerWidth;
        });
    });
    onMounted(() => {
        window.addEventListener("resize", listener);
    });
    onUnmounted(() => {
        window.removeEventListener("resize", listener);
    });

    return width;
}
