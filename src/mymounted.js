import { initloadingid } from "./mark-down-reader.js";
import { Mysidebar_c41e47b3b3bbc85fdbb7dbba7d3a0743644 } from "./refele.js";
import { 挂载初始 } from "./挂载初始.js";
export async function mymounted() {
    await 挂载初始();
    var initloadele = document.getElementById(initloadingid);
    initloadele && (initloadele.style.display = "none");
    window.dispatchEvent(new Event("hashchange"));
    window.dispatchEvent(new Event("resize"));
    监视侧边栏变化触发事件();
}
function 监视侧边栏变化触发事件() {
    const mo = new MutationObserver((mutations) => {
        console.log(mutations);
        window.dispatchEvent(new Event("resize"));
    });
    mo.observe(Mysidebar_c41e47b3b3bbc85fdbb7dbba7d3a0743644.value, {
        attributeOldValue: true,
        subtree: true,
        childList: true,
        attributes: true,
    });
}
