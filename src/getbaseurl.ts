//@ts-ignore
import config from "./config.ts";
//@ts-ignore
import { urlclearhash } from "./urlclearhash.ts";
export function getbaseurl() {
    return config.baseurl;
}
export function getabsoluteindex() {
    return urlclearhash(String(new URL(config.homepage, config.baseurl)));
}
export function getabsolutesummary() {
    return urlclearhash(String(new URL(config.catalogue, config.baseurl)));
}
