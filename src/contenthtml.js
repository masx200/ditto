import { ApphomeVm } from "./mark-down-reader.js";

const contenthtml = {
    get() {
        return ApphomeVm.$refs.markdown内容.innerHTML;
    },
    set(c) {
        ApphomeVm.$refs.markdown内容.innerHTML = c;
    },
};
export { contenthtml };
