import { ApphomeVm } from "./mark-down-reader.js";

const contenthtml = {
    /*
    
    */
    get(): string {
        return (
            //@ts-ignore
            //@ts-ignore
            (
                ApphomeVm.$refs
                    .markdowncontent_2e4c728cac441a0c48939881c2c714361a0 as Element
            ).innerHTML
        );
    },
    set(c: string) {
        //@ts-ignore
        ApphomeVm.$refs.markdowncontent_2e4c728cac441a0c48939881c2c714361a0.innerHTML =
            c;
    },
};
export { contenthtml };
