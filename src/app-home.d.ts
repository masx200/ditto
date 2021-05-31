import { tonextpage, toprevpage } from "./toprevpage.js";
declare const _default: import("vue").ComponentOptions<
    import("vue").default,
    import("@vue/composition-api").ShallowUnwrapRef<{}> & {
        mytitle: string;
        showerror: boolean;
        errorcontent: string;
        showsrc: boolean;
        urltext: string;
        xianshicebianlan: boolean;
        showload: boolean;
    },
    {
        togglecebian(): void;
        scrolltotop(): void;
        scrolltobottom(): void;
        toprevpage: typeof toprevpage;
        tonextpage: typeof tonextpage;
    },
    {
        indexhref(): string;
        muluhtml: {
            get(): string;
            set(c: string): void;
        };
    },
    unknown,
    {
        [x: string]: any;
    }
> &
    import("vue").VueConstructor<import("vue").default> &
    (new (
        ...args: any[]
    ) => import("@vue/composition-api").ComponentRenderProxy<
        {
            [x: string]: any;
        },
        import("@vue/composition-api").ShallowUnwrapRef<{}>,
        {
            mytitle: string;
            showerror: boolean;
            errorcontent: string;
            showsrc: boolean;
            urltext: string;
            xianshicebianlan: boolean;
            showload: boolean;
        },
        {
            indexhref(): string;
            muluhtml: {
                get(): string;
                set(c: string): void;
            };
        },
        {
            togglecebian(): void;
            scrolltotop(): void;
            scrolltobottom(): void;
            toprevpage: typeof toprevpage;
            tonextpage: typeof tonextpage;
        },
        {
            [x: string]: any;
        },
        {},
        true
    >);
export default _default;
