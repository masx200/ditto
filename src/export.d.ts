type mountfun = (el: Element) => void;
export default {
    config: {
        doctitle: string,
        subtitle: string,
        index: string,

        summary: string,
        baseurl: string,
    },
    mount: mountfun,
};
