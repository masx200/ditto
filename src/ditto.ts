import $ from "jquery";
import config from "./config.js";
import { initialize } from "./initialize.js";
// export { $ };

export const cachemarkdown = new Map();
("use strict");

var loading_interval: NodeJS.Timeout;
var loading_id = $("#loading-36bec0d286ad9ab9ca8c1d923b0095c1c06");
var error_id = $("#error-1a347cb1a67e183f2bbfdc8df58888f3076");
var ditto = {
    run: initialize,
    ...config,
};
// export function show_error(err_msg) {
//     error_id.html(err_msg);
//     error_id.show();
// }
export function hide_errors() {
    error_id.hide();
}
export function show_loading() {
    loading_id.show();
    loading_interval = setInterval(function () {
        loading_id.fadeIn(1000).fadeOut(1000);
    }, 2000);
}
export function stop_loading() {
    clearInterval(loading_interval);
    loading_id.hide();
    $("#loadingparent-b80f303d89182a8e58b02981c0822deb975").hide();
}

export default ditto;
