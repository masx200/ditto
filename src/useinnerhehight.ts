import { debounce } from "./debounce.ts";
import {
    ref,
    onUnmounted,
    onMounted
} from "@vue/composition-api";

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
