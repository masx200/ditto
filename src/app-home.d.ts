import { tonextpage, toprevpage } from "./toprevpage.js";
declare const _default: {
    mounted(): void;
    computed: {
        indexhref(): string;
        muluhtml: {
            get(): string;
            set(c: string): void;
        };
    };
    data: () => {
        mytitle: string;
        showerror: boolean;
        errorcontent: string;
        showsrc: boolean;
        urltext: string;
        xianshicebianlan: boolean;
        showload: boolean;
    };
    methods: {
        togglecebian(): void;
        scrolltotop(): void;
        scrolltobottom(): void;
        toprevpage: typeof toprevpage;
        tonextpage: typeof tonextpage;
    };
};
export default _default;
