import { 内容调整左边偏移 } from "./render.js";
import config from "./config.js";
import { mounted } from "./mounted.js";
export default {
    mounted,
    computed: {
        indexhref() {
            return "#" + config.index;
        },
        muluhtml: {
            get() {
                return this.$refs.目录内容.innerHTML;
            },
            set(c) {
                this.$refs.目录内容.innerHTML = c;
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
    },
};
