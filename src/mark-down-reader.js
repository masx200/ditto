import "./polyfill.NodeList.forEach.js";
import "@masx200/webpack-react-vue-spa-awesome-config/registerserviceworker.js";

import vue from "vue";
const Vue = vue;
import app from "./app-home.vue";
import ClipboardJS from "./clipboard.js";
import config from "./config";
import "./ditto.css";
import "./error-alert";
import "./hidewidthless500.css";
import "./index.css";

import "./我的侧边栏.css";
import "./样式.css";

("use strict");

document.getElementById("root").innerHTML = `<div>
<h1>loading</h1>
<span class="mui-spinner mui-spinner-custom">

</span></div>
`;

((ClipboardJS) => {
    new ClipboardJS(".btn").on("success", function (e) {
        if (!e.text) {
            console.log("复制内容空");
        } else {
            //   console.info("Action:", e.action);
            console.info("Text:", e.text);
        }

        e.clearSelection();
    });
})(ClipboardJS);
vue.config.devtools = true;
Vue.config.productionTip = false;
Vue.config.silent = true;
Vue.config.errorHandler = function (err, vm, info) {
    throw err;
};
// console.log(App);
let ApphomeVm = new vue({ ...app });
console.log(ApphomeVm);
export function mount(el) {
    // ApphomeVm = new vue({ el: document.getElementById("root"), ...app });
    ApphomeVm.$mount(el.appendChild(document.createElement("div")));
}

export { ApphomeVm };
export { config };
