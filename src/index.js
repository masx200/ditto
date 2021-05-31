import "./error-alert.js";
import "@masx200/webpack-react-vue-spa-awesome-config/registerserviceworker.js";
import VueCompositionAPI from "@vue/composition-api";
import Vue from "vue";
Vue.use(VueCompositionAPI);
(async () => {
    const module = await import("./export.js");
    const { config, mount } = module;
    Object.assign(config, {
        maintitle: "Markdown Reader",
        subtitle: "Lightweight Markdown Documentation System",
        homepage: "README.md",
        catalogue: "summary.md",
        baseurl: "https://masx200.github.io/markdown-reader/",
    });
    var rootele = document.getElementById("root");
    rootele && mount(rootele);
})();
//# sourceMappingURL=index.js.map
