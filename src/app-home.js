import config from "./config.js";
//import { mymounted } from "./mymounted.js";
import { 内容调整左边偏移 } from "./render.js";
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
            get() {
                return this.$refs
                    .Directorycontent_4dd4b8ef845d1a0de9b7e29b0e9bd1be517
                    .innerHTML;
            },
            set(c) {
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
            this.xianshicebianlan = !this.xianshicebianlan;
            内容调整左边偏移();
        },
        scrolltotop() {
            scrollTo(0, 0);
        },
        scrolltobottom() {
            scrollTo(0, document.body.scrollHeight);
        },
        toprevpage() {},
        tonextpage() {},
    },
};
