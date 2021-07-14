//@ts-ignore
import Vue from "vue";
//@ts-ignore
import { defineAsyncComponent } from "./compositionvue.ts";
// import app from "./app-home.vue";
//@ts-ignore
import config from "./config.ts";
//@ts-ignore
import "./error-alert.ts";
//@ts-ignore
import { guid } from "./guid.ts";
import Loding from "./loading.vue";
//@ts-ignore
import "./polyfill.NodeList.forEach.ts";
// console.log(Loding)
//@ts-ignore
const app = defineAsyncComponent({
    loadingComponent: Loding,
    loader: () => import("./app-home.vue"),
    timeout: 0,
    onError(error: Error) {
        console.error(error);
        throw error;
    },
});
// console.log(app);
//@ts-ignore
//@ts-ignore
//@ts-ignore
// console.log(app);

("use strict");
export const initloadingid = "first-" + guid();

Vue.config.devtools = true;
Vue.config.productionTip = false;
Vue.config.silent = true;
Vue.config.errorHandler = function (err: Error) {
    console.error(err);
    throw err;
};

const ApphomeVm: Vue = new Vue({
    render(h) {
        return h(app);
    },
});
// console.log(ApphomeVm);

export function mount(el: Element) {
    const searchobj = Object.fromEntries(new URL(location.href).searchParams);
    // console.log("search", searchobj);

    Object.keys(config).forEach((key) => {
        let value = searchobj[key];
        value && Reflect.set(config, key, value);
    });
    config.baseurl = String(new URL(config.baseurl, location.href));
    // console.log("config", config);
    if (!document.getElementById("app")) {
        el.innerHTML = `<div id=${initloadingid}>
<h1>loading</h1>
<span class="mui-spinner mui-spinner-custom">

</span></div>
`;
    }

    let elementroot =
        document.getElementById("app") ||
        el.appendChild(document.createElement("div"));
    Object.assign(elementroot, {
        id: "app",
    });
    ApphomeVm.$mount(elementroot);

    Object.assign(ApphomeVm.$el, {
        id: "app",
    });
}

// export { ApphomeVm };
