import VueCompositionAPI from "@vue/composition-api";
import Vue from "vue";
Vue.use(VueCompositionAPI);
export * from "vue";
//@ts-ignore
export * from "@vue/composition-api";
export { Vue, VueCompositionAPI };
import { defineComponent } from "@vue/composition-api";
export { defineComponent };