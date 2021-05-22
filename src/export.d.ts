export default interface markdownreader {
    config: {
        doctitle: string;
        subtitle: string;
        index: string;
        summary: string;
        baseurl: string;
    };
    mount: (el: any) => void;
}
