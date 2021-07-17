//@ts-ignore
import { Adjustthedistance } from "./Adjustthedistance.ts";
//@ts-ignore
import { getappvm } from "./appvm.ts"; //@ts-ignore
import { initloadingid } from "./mark-down-reader.ts";
//@ts-ignore
import Vue from "vue";
//@ts-ignore
//@ts-ignore
import { 挂载初始 } from "./挂载初始.ts";
export async function mymounted() {
    await 挂载初始();
    await Vue.nextTick();
    监视侧边栏变化触发事件();
    var initloadele = document.getElementById(initloadingid);
    initloadele && (initloadele.style.display = "none");
}
function 监视侧边栏变化触发事件() {
    const mo = new MutationObserver((mutations) => {
        // console.log(mutations);
        Adjustthedistance();
        // 内容调整左边偏移();
    });
    const appvm = getappvm();
    const opts = {
        attributeOldValue: true,
        subtree: true,
        childList: true,
        attributes: true,
    };
    try {
        const nodes = [
            appvm.mynavigationbar_dceff036a563faf668b4d4a50fd702d1d95,
            appvm.getsidebarele(),
        ];
        nodes.forEach((n) => {
            mo.observe(n, opts);
        });
    } catch (e) {
        console.error(e);
    }
}
