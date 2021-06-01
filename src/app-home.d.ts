import { tonextpage, toprevpage } from "./toprevpage.js";
declare const _default: import("vue").ComponentOptions<
    import("vue").default,
    import("@vue/composition-api").ShallowUnwrapRef<{
        contentcontainer_9ce8d13b9be97b46e89aeea8f242169cfa1: import("@vue/composition-api").Ref<any>;
        mynavigationbar_dceff036a563faf668b4d4a50fd702d1d95: import("@vue/composition-api").Ref<any>;
        mybody_143af32b9b8f396b798aeb8d4ee68ed9ca3: import("@vue/composition-api").Ref<any>;
        Directorycontent_4dd4b8ef845d1a0de9b7e29b0e9bd1be517: import("@vue/composition-api").Ref<any>;
        markdowncontent_2e4c728cac441a0c48939881c2c714361a0: import("@vue/composition-api").Ref<any>;
        Mysidebar_c41e47b3b3bbc85fdbb7dbba7d3a0743644: import("@vue/composition-api").Ref<any>;
    }> & {
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
        import("@vue/composition-api").ShallowUnwrapRef<{
            contentcontainer_9ce8d13b9be97b46e89aeea8f242169cfa1: import("@vue/composition-api").Ref<any>;
            mynavigationbar_dceff036a563faf668b4d4a50fd702d1d95: import("@vue/composition-api").Ref<any>;
            mybody_143af32b9b8f396b798aeb8d4ee68ed9ca3: import("@vue/composition-api").Ref<any>;
            Directorycontent_4dd4b8ef845d1a0de9b7e29b0e9bd1be517: import("@vue/composition-api").Ref<any>;
            markdowncontent_2e4c728cac441a0c48939881c2c714361a0: import("@vue/composition-api").Ref<any>;
            Mysidebar_c41e47b3b3bbc85fdbb7dbba7d3a0743644: import("@vue/composition-api").Ref<any>;
        }>,
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
