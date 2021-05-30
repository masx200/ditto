import { initialize } from "./initialize.js";
export declare const cachemarkdown: Map<any, any>;
declare var ditto: {
    mainitle: string;
    subtitle: string;
    homepage: string;
    catalogue: string;
    baseurl: string;
    run: typeof initialize;
};
export declare function hide_errors(): void;
export declare function show_loading(): void;
export declare function stop_loading(): void;
export default ditto;
