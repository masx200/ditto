//@ts-ignore
import { ApphomeVm } from "./mark-down-reader.ts"; //@ts-ignore
import { menulist } from "./menulist.ts";
function findindexexmenulist() {
    // console.log(menulist);

    var currentpageurl = Reflect.get(ApphomeVm, "urltext");
    // console.log(currentpageurl);
    var currentpageindex = menulist.findIndex(
        (a: string) => a === currentpageurl
    );
    // console.log(currentpageindex);
    return currentpageindex;
}

const disabledalinkhref = "javascript:;";

export function setnextpagelink() {
    Reflect.set(ApphomeVm, "nextpagelink", disabledalinkhref);

    var currentpageindex = findindexexmenulist();
    if (!(currentpageindex >= 0 && currentpageindex <= menulist.length - 1)) {
        // console.error("没有在菜单列表中找到当前页面");
        return;
    }
    var pageindextogo = currentpageindex + 1;
    if (!(pageindextogo >= 0 && pageindextogo <= menulist.length - 1)) {
        // console.error("已经到达菜单列表的起始处或结尾处");
        return;
    }
    let hashtogo = menulist[pageindextogo];
    Reflect.set(
        ApphomeVm,
        "nextpagelink",
        String(
            Object.assign(new URL(location.href), {
                hash: hashtogo,
            })
        )
    );
}
export function setprevpagelink() {
    Reflect.set(ApphomeVm, "prevpagelink", disabledalinkhref);
    var currentpageindex = findindexexmenulist();
    if (!(currentpageindex >= 0 && currentpageindex <= menulist.length - 1)) {
        // console.error("没有在菜单列表中找到当前页面");
        return;
    }
    var pageindextogo = currentpageindex - 1;
    if (!(pageindextogo >= 0 && pageindextogo <= menulist.length - 1)) {
        // console.error("已经到达菜单列表的起始处或结尾处");
        return;
    }
    let hashtogo = menulist[pageindextogo];

    Reflect.set(
        ApphomeVm,
        "prevpagelink",
        String(
            Object.assign(new URL(location.href), {
                hash: hashtogo,
            })
        )
    );
}
