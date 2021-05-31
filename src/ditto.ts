import $ from "jquery";
import config from "./config.js";
import { initialize } from "./initialize.js";
// export { $ };

export const cachemarkdown = new Map();
("use strict");

// var loading_interval: ReturnType<typeof setInterval>;
var loading_id = $("#loading-36bec0d286ad9ab9ca8c1d923b0095c1c06");

var ditto = {
    run: initialize,
    ...config,
};

export function show_loading() {
    loading_id.show();
    // loading_interval = setInterval(function () {
    //     loading_id.fadeIn(1000).fadeOut(1000);
    // }, 2000);
}
export function stop_loading() {
    // clearInterval(loading_interval);
    loading_id.hide();
    $("#loadingparent-b80f303d89182a8e58b02981c0822deb975").hide();
}

export default ditto;
