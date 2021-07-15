//@ts-ignore
import { Adjustthedistance } from "./Adjustthedistance.ts";
//@ts-ignore
import { getappvm } from "./appvm.ts"; //@ts-ignore
import { initloadingid } from "./mark-down-reader.ts";
//@ts-ignore
import { 内容调整左边偏移 } from "./内容调整左边偏移.ts";
//@ts-ignore
//@ts-ignore
import { 挂载初始 } from "./挂载初始.ts";
export async function mymounted() {
    await 挂载初始();
    var initloadele = document.getElementById(initloadingid);
    initloadele && (initloadele.style.display = "none");

    // window.dispatchEvent(new Event("hashchange"));
    window.dispatchEvent(new Event("resize"));
    监视侧边栏变化触发事件();
}
function 监视侧边栏变化触发事件() {
    const mo = new MutationObserver(() => {
        Adjustthedistance();
        内容调整左边偏移();
    });
    const appvm = getappvm();
    mo.observe(appvm.Mysidebar_c41e47b3b3bbc85fdbb7dbba7d3a0743644, {
        attributeOldValue: true,
        subtree: true,
        childList: true,
        attributes: true,
    });
}
