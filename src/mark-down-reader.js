import Vue from "vue";
import { Adjustthedistance } from "./Adjustthedistance";
import app from "./app-home.vue";
import config from "./config.js";
import "./error-alert.js";
import { guid } from "./guid.js";
import "./polyfill.NodeList.forEach.js";
import { routerpagegethandler } from "./routerpageget.ts";
import { 内容调整左边偏移 } from "./内容调整左边偏移";
import { 窄屏隐藏侧边栏 } from "./窄屏隐藏侧边栏";
window.addEventListener("resize", Adjustthedistance);
window.addEventListener("resize", 内容调整左边偏移);
console.log(app);
("use strict");
export const initloadingid = "first-" + guid();
Vue.config.devtools = true;
Vue.config.productionTip = false;
Vue.config.silent = true;
Vue.config.errorHandler = function (err, vm, info) {
    console.error(err, vm, info);
    throw err;
};
const ApphomeVm = new Vue(app);
console.log(ApphomeVm);
export function mount(el) {
    const searchobj = Object.fromEntries(new URL(location.href).searchParams);
    console.log("search", searchobj);
    Object.keys(config).forEach((key) => {
        let value = searchobj[key];
        value && Reflect.set(config, key, value);
    });
    config.baseurl = String(new URL(config.baseurl, location.href));
    console.log("config", config);
    el.innerHTML = `<div id=${initloadingid}>
<h1>loading</h1>
<span class="mui-spinner mui-spinner-custom">

</span></div>
`;
    ApphomeVm.$mount(el.appendChild(document.createElement("div")));
}
export { ApphomeVm };
export { config };
window.addEventListener("hashchange", routerpagegethandler);
window.addEventListener("hashchange", 窄屏隐藏侧边栏);
