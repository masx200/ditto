import { ApphomeVm } from "./mark-down-reader.js";
const contenthtml = {
    get() {
        return ApphomeVm.$refs
            .markdowncontent_2e4c728cac441a0c48939881c2c714361a0.innerHTML;
    },
    set(c) {
        ApphomeVm.$refs.markdowncontent_2e4c728cac441a0c48939881c2c714361a0.innerHTML =
            c;
    },
};
export { contenthtml };
//# sourceMappingURL=contenthtml.js.map
