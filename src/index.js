import "@masx200/webpack-react-vue-spa-awesome-config/registerserviceworker.js";
import { config, mount } from "./mark-down-reader";
Object.assign(config, {
  doctitle: "markdown-reader",
  subtitle: "Lightweight Markdown Documentation System",
  index: "README.md",

  summary: "summary.md",
});
mount( document.getElementById("root"));
