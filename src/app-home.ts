import config from "./config.js";
import { 内容调整左边偏移 } from "./render.js";
import { tonextpage, toprevpage } from "./toprevpage.js";
//import { mymounted } from "./mymounted.js";

export default {
    mounted() {
        (async () => {
            var module = await import("./mymounted.js");

            //console.log(module);
            var mymounted = module.mymounted;
            mymounted();
        })();
    },
    computed: {
        indexhref() {
            return "#" + config.index;
        },
        muluhtml: {
            /**
             * @returns {string}
             */
            get(): string {
                // @ts-ignore
                return this.$refs
                    .Directorycontent_4dd4b8ef845d1a0de9b7e29b0e9bd1be517
                    .innerHTML;
            },
            /**
             * @param {string} c
             */
            set(c: string) {
                // @ts-ignore
                this.$refs.Directorycontent_4dd4b8ef845d1a0de9b7e29b0e9bd1be517.innerHTML =
                    c;
            },
        },
    },
    data: () => ({
        mytitle: "",
        showerror: false,
        errorcontent: "",

        urltext: "",
        xianshicebianlan: true,
    }),
    methods: {
        togglecebian() {
            // @ts-ignore
            this.xianshicebianlan = !this.xianshicebianlan;
            内容调整左边偏移();
        },
        scrolltotop() {
            scrollTo(0, 0);
        },
        scrolltobottom() {
            scrollTo(0, document.body.scrollHeight);
        },
        toprevpage: toprevpage,
        tonextpage: tonextpage,
    },
};
