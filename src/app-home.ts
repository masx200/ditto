import {
    defineComponent,
    ref,
    computed,
    onMounted,
} from "@vue/composition-api";
//@ts-ignore
import config from "./config.ts";
//@ts-ignore
import { getabsoluteindex } from "./getbaseurl.ts";
import {
    contentcontainer_9ce8d13b9be97b46e89aeea8f242169cfa1,
    Directorycontent_4dd4b8ef845d1a0de9b7e29b0e9bd1be517,
    markdowncontent_2e4c728cac441a0c48939881c2c714361a0,
    mybody_143af32b9b8f396b798aeb8d4ee68ed9ca3,
    mynavigationbar_dceff036a563faf668b4d4a50fd702d1d95,
    Mysidebar_c41e47b3b3bbc85fdbb7dbba7d3a0743644,
    //@ts-ignore
} from "./refele.ts";
//@ts-ignore
//import { tonextpage, toprevpage } from "./toprevpage.ts";
const disabledalinkhref = "javascript:;";
export default defineComponent({
    setup() {
        // console.log({ props, attrs, slots, emit });
        const widescreen = ref(true);
        const narrowscreen = computed(() => {
            return !widescreen.value;
        });
        onMounted(() => {
            window.addEventListener("resize", () => {
                requestAnimationFrame(() => {
                    widescreen.value = document.body.clientWidth > 500;
                });
            });
        });
        const allret = {
            widescreen,
            narrowscreen,
            contentcontainer_9ce8d13b9be97b46e89aeea8f242169cfa1,
            mynavigationbar_dceff036a563faf668b4d4a50fd702d1d95,
            mybody_143af32b9b8f396b798aeb8d4ee68ed9ca3,
            Directorycontent_4dd4b8ef845d1a0de9b7e29b0e9bd1be517,
            markdowncontent_2e4c728cac441a0c48939881c2c714361a0,
            Mysidebar_c41e47b3b3bbc85fdbb7dbba7d3a0743644,
        };

        return allret;
    },
    mounted() {
        console.log(this);
        (async () => {
            //@ts-ignore
            var module = await import("./mymounted.ts");

            var mymounted = module.mymounted;
            mymounted();
        })();
    },
    computed: {},
    data: () => ({
        indexhref: String(
            Object.assign(new URL(location.href), {
                hash: getabsoluteindex(),
            })
        ),
        contenthtml: "",
        muluhtml: "",
        nextpagelink: disabledalinkhref,
        prevpagelink: disabledalinkhref,
        mytitle: config.maintitle,
        showerror: false,
        errorcontent: "",
        showsrc: false,
        urltext: "",
        xianshicebianlan: true,
        showload: true,
    }),
    methods: {
        togglecebian() {
            this.xianshicebianlan = !this.xianshicebianlan;
        },
        scrolltotop() {
            scrollTo(0, 0);
        },
        scrolltobottom() {
            scrollTo(0, document.body.scrollHeight);
        },
        // toprevpage: toprevpage,
        //    tonextpage: tonextpage,
    },
});
