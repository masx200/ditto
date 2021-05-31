import config from "./config.js";
import { 内容调整左边偏移 } from "./render.js";
import { tonextpage, toprevpage } from "./toprevpage.js";
//import { mymounted } from "./mymounted.js";
import { defineComponent } from "@vue/composition-api";

import {
    Directorycontent_4dd4b8ef845d1a0de9b7e29b0e9bd1be517,
    markdowncontent_2e4c728cac441a0c48939881c2c714361a0,
    Mysidebar_c41e47b3b3bbc85fdbb7dbba7d3a0743644,
} from "./refele.js";
export default defineComponent({
    setup(props, { attrs, slots, emit }) {
        console.log({ props, attrs, slots, emit });
        return {
            Directorycontent_4dd4b8ef845d1a0de9b7e29b0e9bd1be517,
            markdowncontent_2e4c728cac441a0c48939881c2c714361a0,
            Mysidebar_c41e47b3b3bbc85fdbb7dbba7d3a0743644,
        };
    },
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
            return "#" + config.homepage;
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
        mytitle: "Markdown Reader",
        showerror: false,
        errorcontent: "",
        showsrc: false,
        urltext: "",
        xianshicebianlan: true,
        showload: true,
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
});
