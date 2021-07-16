import { defineComponent,ref } from "@vue/composition-api";
export default defineComponent({
setup(){
const container=ref()
return {container}
},
    methods: {},
    props: ["html"],
});
