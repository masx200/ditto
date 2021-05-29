interface Markdownreader {
    config: {
        doctitle: string;
        subtitle: string;
        index: string;
        summary: string;
        baseurl: string;
    };
    mount: (el: any) => void;
}
declare const config: Markdownreader["config"];
declare const mount: Markdownreader["mount"];
export { config, mount };
export { Markdownreader };
