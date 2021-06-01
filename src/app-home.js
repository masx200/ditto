import { defineComponent, onMounted } from "@vue/composition-api";
import config from "./config.js";
import {
    contentcontainer_9ce8d13b9be97b46e89aeea8f242169cfa1,
    Directorycontent_4dd4b8ef845d1a0de9b7e29b0e9bd1be517,
    markdowncontent_2e4c728cac441a0c48939881c2c714361a0,
    mybody_143af32b9b8f396b798aeb8d4ee68ed9ca3,
    mynavigationbar_dceff036a563faf668b4d4a50fd702d1d95,
    Mysidebar_c41e47b3b3bbc85fdbb7dbba7d3a0743644,
} from "./refele.js";
import { tonextpage, toprevpage } from "./toprevpage.js";
export default defineComponent({
    setup(props, { attrs, slots, emit }) {
        console.log({ props, attrs, slots, emit });
        const allret = {
            contentcontainer_9ce8d13b9be97b46e89aeea8f242169cfa1,
            mynavigationbar_dceff036a563faf668b4d4a50fd702d1d95,
            mybody_143af32b9b8f396b798aeb8d4ee68ed9ca3,
            Directorycontent_4dd4b8ef845d1a0de9b7e29b0e9bd1be517,
            markdowncontent_2e4c728cac441a0c48939881c2c714361a0,
            Mysidebar_c41e47b3b3bbc85fdbb7dbba7d3a0743644,
        };
        onMounted(() => {
            console.log(allret);
        });
        return allret;
    },
    mounted() {
        (async () => {
            var module = await import("./mymounted.js");
            var mymounted = module.mymounted;
            mymounted();
        })();
    },
    computed: {
        indexhref() {
            return "#" + config.homepage;
        },
        muluhtml: {
            get() {
                return Directorycontent_4dd4b8ef845d1a0de9b7e29b0e9bd1be517
                    .value.innerHTML;
            },
            set(c) {
                Directorycontent_4dd4b8ef845d1a0de9b7e29b0e9bd1be517.value.innerHTML =
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
            this.xianshicebianlan = !this.xianshicebianlan;
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
