import $ from "jquery";
import { initloadingid } from "./mark-down-reader.js";
import { myonhashchangehandler } from "./onhashchange.js";
import { 内容调整左边偏移 } from "./render.js";
import { 挂载初始 } from "./挂载初始";
export async function mymounted() {
    myonhashchangehandler();
    $("#my主体-143af32b9b8f396b798aeb8d4ee68ed9ca3").css(
        "padding-top",
        $("#mynavigationbar-dceff036a563faf668b4d4a50fd702d1d95").height()
    );
    await 内容调整左边偏移();
    await 挂载初始();
    document.getElementById(initloadingid).style.display = "none";
    myonhashchangehandler();

    //初始化完成就隐藏侧边栏，屏幕较小的宽度生效
}
