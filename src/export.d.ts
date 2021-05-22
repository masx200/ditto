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
declare const markdownreader: Markdownreader;
export default markdownreader;
