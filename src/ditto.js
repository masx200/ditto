import $ from "jquery";
import config from "./config.js";
import { initialize } from "./initialize.js";
export const cachemarkdown = new Map();
("use strict");
var loading_id = $("#loading-36bec0d286ad9ab9ca8c1d923b0095c1c06");
var ditto = {
    run: initialize,
    ...config,
};
export function show_loading() {
    loading_id.show();
}
export function stop_loading() {
    loading_id.hide();
}
export default ditto;
