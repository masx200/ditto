import { defineComponent,ref } from "@vue/composition-api";
import Vue from "vue";
export default defineComponent({
setup(){
const container=ref()
return {container}
},
    methods: {
onclick(e){
const ele=e.target

requestIdleCallback(()=>{
ele.scrollIntoView({
                        inline: "center",
                        block: "center",
                    });
})
}

},
    props: ["html"],

watch:{async html(value){
const th=this
await Vue.nextTick();

Array.from(this.container.getElementsByClassName("scrollIntoView")).forEach(e=>{

e.onclick=th.onclick

})

}}
});
