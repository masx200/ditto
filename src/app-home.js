import { 挂载初始 } from "./render.js";
import $ from "jquery";
import { 内容调整左边偏移 } from "./render.js";
import config from "./config.js";
export default {
    mounted() {
        $("#my主体").css("padding-top", $("#my导航栏").height());
        内容调整左边偏移();
        挂载初始();
    },
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
        contenthtml: {
            get() {
                return this.$refs.markdown内容.innerHTML;
            },
            set(c) {
                this.$refs.markdown内容.innerHTML = c;
            },
        },
    },
    data: () => ({
        mytitle: "",
        showerror: false,
        errorcontent: "",
        // contenthtml: "",
        // muluhtml: "",
        urltext: "",
        xianshicebianlan: true,
    }),
    methods: {
        togglecebian() {
            this.xianshicebianlan = !this.xianshicebianlan;
            内容调整左边偏移();
        },
    },
};
