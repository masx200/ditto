import { initialize } from "./initialize.js";
export declare const cachemarkdown: Map<any, any>;
declare var ditto: {
    doctitle: string;
    subtitle: string;
    index: string;
    summary: string;
    baseurl: string;
    run: typeof initialize;
};
export declare function hide_errors(): void;
export declare function show_loading(): void;
export declare function stop_loading(): void;
export default ditto;
