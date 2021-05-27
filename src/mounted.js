import { 挂载初始 } from "./render.js";
import $ from "jquery";
import { 内容调整左边偏移 } from "./render.js";
import { initloadingid } from "./mark-down-reader.js";

export async function mounted() {
    $("#my主体").css("padding-top", $("#my导航栏").height());
    await 内容调整左边偏移();
    await 挂载初始();
    document.getElementById(initloadingid).style.display = "none";

    window.dispatch(new Event("hashchange"))
}
