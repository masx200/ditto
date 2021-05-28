import "@masx200/webpack-react-vue-spa-awesome-config/registerserviceworker.js";

import vue from "vue";
import app from "./app-home.vue";
import config from "./config.js";
import "./ditto.css";
import "./error-alert";
import { guid } from "./guid.js";
//import "./hidewidthless500.css";
import "./index.css";
import "./polyfill.NodeList.forEach.js";
import "./我的侧边栏.css";
import "./样式.css";

const Vue = vue;

("use strict");
export const initloadingid = guid();
document.getElementById("root").innerHTML = `<div id=${initloadingid}>
<h1>loading</h1>
<span class="mui-spinner mui-spinner-custom">

</span></div>
`;
window.addEventListener(
    "load",

    () => {
        import("clipboard").then((module) => {
            const ClipboardJS = module.default;

            ((ClipboardJS) => {
                new ClipboardJS(".btn").on("success", function (e) {
                    if (!e.text) {
                        console.log("复制内容空");
                    } else {
                        console.info("Text:", e.text);
                    }

                    e.clearSelection();
                });
            })(ClipboardJS);
        });
    },

    { once: true }
);

vue.config.devtools = true;
Vue.config.productionTip = false;
Vue.config.silent = true;
Vue.config.errorHandler = function (err, vm, info) {
    throw err;
};

let ApphomeVm = new vue({ ...app });
console.log(ApphomeVm);
export function mount(el) {
    ApphomeVm.$mount(el.appendChild(document.createElement("div")));
}

export { ApphomeVm };
export { config };
