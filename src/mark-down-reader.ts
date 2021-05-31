//import VueCompositionAPI from "@vue/composition-api";
import Vue from "vue";
// @ts-ignore
import app from "./app-home.vue";
import config from "./config.js";

import "./error-alert.js";
import { guid } from "./guid.js";

import "./polyfill.NodeList.forEach.js";

import "./styles.js";
console.log(app);

("use strict");
export const initloadingid = "first-" + guid();

window.addEventListener(
    "load",

    async () => {
        var module = await import("clipboard");

        //console.log(module);
        const ClipboardJS = module.default;

        // ((ClipboardJS) => {
        new ClipboardJS(".btn").on("success", function (e: ClipboardJS.Event) {
            // if (!e.text) {
            //     //console.log("复制内容空");
            // } else {
            console.info("Text:", e.text);
            // }

            e.clearSelection();
        });
    },

    { once: true }
);

Vue.config.devtools = true;
Vue.config.productionTip = false;
Vue.config.silent = true;
Vue.config.errorHandler = function (
    /** @type {Error} */ err: Error,
    /** @type {vue} */ vm: Vue,
    /** @type {string} */ info: string
) {
    console.error(err, vm, info);
    throw err;
};
// @ts-ignore
const ApphomeVm: Vue = new Vue({ ...app });
console.log(ApphomeVm);
/**
 * @param {Element } el
 */
export function mount(el: Element) {
    const searchobj = Object.fromEntries(new URL(location.href).searchParams);
    console.log("search", searchobj);

    Object.keys(config).forEach((key) => {
        let value = searchobj[key];
        value && Reflect.set(config, key, value);
        // @ts-ignore
        //
    });
    config.baseurl = String(new URL(config.baseurl, location.href));
    console.log("config", config);
    //document.getElementById("root").
    el.innerHTML = `<div id=${initloadingid}>
<h1>loading</h1>
<span class="mui-spinner mui-spinner-custom">

</span></div>
`;
    ApphomeVm.$mount(el.appendChild(document.createElement("div")));
}

export { ApphomeVm };
export { config };
