import { markdowncontent_2e4c728cac441a0c48939881c2c714361a0 } from "./refele.ts";
const contenthtml = {
    get() {
        return markdowncontent_2e4c728cac441a0c48939881c2c714361a0.value
            .innerHTML;
    },
    set(c) {
        markdowncontent_2e4c728cac441a0c48939881c2c714361a0.value.innerHTML = c;
    },
};
export { contenthtml };
