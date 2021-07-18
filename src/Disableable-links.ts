import { defineComponent } from "@vue/composition-api";
//@ts-ignore
import { disabledalinkhref } from "./disabledalinkhref.ts";

export default defineComponent({
    props: ["href"],
    computed: {
        disabled() {
            return !this.enabled;
        },
        enabled(): boolean {
            return this.href !== disabledalinkhref;
        },
    },
});
