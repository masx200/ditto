import { 挂载初始 } from "./render.js";
import $ from "jquery";
import { 内容调整左边偏移 } from "./render.js";
import { initloadingid } from "./mark-down-reader.js";
import { myonhashchangehandler } from "./onhashchange.js";

export async function mymounted() {
    myonhashchangehandler();
    $("#my主体").css("padding-top", $("#my导航栏").height());
    await 内容调整左边偏移();
    await 挂载初始();
    document.getElementById(initloadingid).style.display = "none";
    myonhashchangehandler();
    // window.dispatchEvent(new Event("hashchange"));
    //初始化完成就隐藏侧边栏，屏幕较小的宽度生效
}
