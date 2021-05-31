import "@masx200/webpack-react-vue-spa-awesome-config/registerserviceworker.js";
import vue from "vue";
import app from "./app-home.vue";
import config from "./config.js";
import "./ditto.css";
import "./error-alert.js";
import { guid } from "./guid.js";
import "./index.css";
import "./polyfill.NodeList.forEach.js";
import "./我的侧边栏.css";
import "./样式.css";
console.log(app);
const Vue = vue;
("use strict");
export const initloadingid = "first-" + guid();
window.addEventListener(
    "load",
    async () => {
        var module = await import("clipboard");
        const ClipboardJS = module.default;
        new ClipboardJS(".btn").on("success", function (e) {
            if (!e.text) {
            } else {
                console.info("Text:", e.text);
            }
            e.clearSelection();
        });
    },
    { once: true }
);
vue.config.devtools = true;
Vue.config.productionTip = false;
Vue.config.silent = true;
Vue.config.errorHandler = function (err, vm, info) {
    console.error(err, vm, info);
    throw err;
};
const ApphomeVm = new vue({ ...app });
console.log(ApphomeVm);
export function mount(el) {
    const searchobj = Object.fromEntries(new URL(location.href).searchParams);
    console.log("search", searchobj);
    Object.keys(config).forEach((key) => {
        let value = searchobj[key];
        value && (config[key] = value);
    });
    config.baseurl = String(new URL(config.baseurl, location.href));
    console.log(config);
    el.innerHTML = `<div id=${initloadingid}>
<h1>loading</h1>
<span class="mui-spinner mui-spinner-custom">

</span></div>
`;
    ApphomeVm.$mount(el.appendChild(document.createElement("div")));
}
export { ApphomeVm };
export { config };
