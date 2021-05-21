// @ts-nocheck
import "@masx200/webpack-react-vue-spa-awesome-config/registerserviceworker.js";
import vue from "vue";
import app from "./app-home.vue";

import ClipboardJS from "./clipboard.js";
import config from "./config";
import "./ditto.css";
import "./hidewidthless500.css";
import "./index.css";

import modulemathjax from "./MathJax/index";
import "./我的侧边栏.css";
import "./样式.css";

("use strict");

document.getElementById("root").innerHTML = `<div>
<h1>loading</h1>
<span class="mui-spinner mui-spinner-custom">

</span></div>
`;
((MathJax) => {
  // console.log(module);
  // var MathJax = module.default;
  MathJax.Hub.Config({
    tex2jax: { inlineMath: [["$", "$"]], processRefs: !0 },
    TeX: {
      equationNumbers: {
        autoNumber: "all",
        formatID: function (n) {
          return "(" + n + ")";
        },
        formatURL: function () {
          return null;
        },
      },
    },
  });
})(modulemathjax);

((ClipboardJS) => {
  // console.log(m);
  // let ClipboardJS = m.default;
  // const nclp =
  new ClipboardJS(".btn").on("success", function (e) {
    if (!e.text) {
      console.log("复制内容空");
    } else {
      //   console.info("Action:", e.action);
      console.info("Text:", e.text);
    }

    e.clearSelection();
  });
  // console.log(nclp);
})(ClipboardJS);
vue.config.devtools = true;
// console.log(App);
let ApphomeVm;
export function mountinit() {
  ApphomeVm = new vue({ el: document.getElementById("root"), ...app });
}

// console.log(ApphomeVm);
export { ApphomeVm };
export { config };
