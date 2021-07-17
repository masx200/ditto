//@ts-ignore
import { defineComponent } from "@vue/composition-api";
import { Adjustthedistance } from "./Adjustthedistance";
//@ts-ignore
import { appvm } from "./appvm.ts";
//@ts-ignore
import { computed, onMounted, ref } from "./compositionvue.ts";
//@ts-ignore
import config from "./config.ts";
//@ts-ignore
//@ts-ignore
import { disabledalinkhref } from "./disabledalinkhref.ts";
//@ts-ignore
import { eventtarget } from "./eventtarget.ts";
//@ts-ignore
import { getabsoluteindex } from "./getbaseurl.ts";
//@ts-ignore
import { scrolltobottom } from "./scrolltobottom.ts";
//@ts-ignore
import { scrolltotop } from "./scrolltotop.ts";
import { sidebarscroll } from "./sidebarscroll";
import { useinnerwidth } from "./useinnerwidth";
import Vue from "vue";
export default defineComponent({
    components: {},
    setup() {
        const mybody_143af32b9b8f396b798aeb8d4ee68ed9ca3 = ref();
        const mynavigationbar_dceff036a563faf668b4d4a50fd702d1d95 = ref();
        const contentcontainer_9ce8d13b9be97b46e89aeea8f242169cfa1 = ref();
        const Mysidebar_c41e47b3b3bbc85fdbb7dbba7d3a0743644 = ref();
        const width = useinnerwidth();
        const widescreen = computed(() => {
            return width.value > 550;
        });
        const narrowscreen = computed(() => {
            return !widescreen.value;
        });
        const largescreen = computed(() => {
            return width.value > 800;
        });
        const middlescreen = computed(() => {
            return !largescreen.value;
        });
        const allret = {
            largescreen,
            middlescreen,
            width,
            widescreen,
            narrowscreen,
            contentcontainer_9ce8d13b9be97b46e89aeea8f242169cfa1,
            mynavigationbar_dceff036a563faf668b4d4a50fd702d1d95,
            mybody_143af32b9b8f396b798aeb8d4ee68ed9ca3,
            Mysidebar_c41e47b3b3bbc85fdbb7dbba7d3a0743644,
        };
        onMounted(() => {
            (async () => {
                //@ts-ignore
                var module = await import("./mymounted.ts");

                var mymounted = module.mymounted;
                mymounted();
            })();
        });

        return allret;
    },

    async mounted() {
        // console.log(this);

        this.indexhref = getindexhref();

        this.mytitle = getmytitle();
        appvm.value = this;
        await Vue.nextTick();
        eventtarget.dispatchEvent(new Event("mount"));
        this.$el.id = "app";
    },
    watch: {
        async xianshicebianlan(value) {
            await Vue.nextTick();
            Adjustthedistance();
            if (value) {
                sidebarscroll();
            }
        },
        async largescreen(value) {
            await Vue.nextTick();
            if (value) {
                this.xianshicebianlan = true;
            }
        },
    },
    data: () => ({
        left: "265px",
        top: "62px",
        indexhref: getindexhref(),
        contenthtml: "",
        muluhtml: "",
        nextpagelink: disabledalinkhref,
        prevpagelink: disabledalinkhref,
        mytitle: getmytitle(),
        showerror: false,
        errorcontent: "",
        showsrc: false,
        urltext: "",
        xianshicebianlan: true,
        showload: true,
    }),
    methods: {
        getsidebarele() {
            return this.Mysidebar_c41e47b3b3bbc85fdbb7dbba7d3a0743644.$refs
                .Mysidebar_c41e47b3b3bbc85fdbb7dbba7d3a0743644;
        },
        togglecebian() {
            //@ts-ignore
            this.xianshicebianlan = !this.xianshicebianlan;
        },
        scrolltotop,
        scrolltobottom,
    },
});
function getindexhref() {
    return String(
        Object.assign(new URL(location.href), {
            hash: getabsoluteindex(),
        })
    );
}
function getmytitle() {
    return config.maintitle;
}
