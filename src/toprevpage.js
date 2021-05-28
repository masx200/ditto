import { ApphomeVm } from "./mark-down-reader.js";
import { menulist } from "./menulist.js";

export function toprevpage() {
    console.log(menulist);
    var currentpageurl = ApphomeVm.urltext;
    console.log(currentpageurl);
    var currentpageindex = menulist.findIndex((a) => a === currentpageurl);
    console.log(currentpageindex);
}
export function tonextpage() {
    console.log(menulist);
    var currentpageurl = ApphomeVm.urltext;
    console.log(currentpageurl);
    var currentpageindex = menulist.findIndex((a) => a === currentpageurl);
    console.log(currentpageindex);
}
