//@ts-ignore
import config from "./config.ts";

export function getbaseurl() {
    return config.baseurl;
}
export function getabsoluteindex() {
    return String(new URL(config.homepage, config.baseurl));
}
export function getabsolutesummary() {
    return String(new URL(config.catalogue, config.baseurl));
}
