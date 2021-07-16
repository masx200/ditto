//@ts-ignore
import { debounce } from "./debounce.ts";
import { defineComponent ,ref,onUnmounted,onMounted} from "@vue/composition-api";
export default defineComponent({
setup(){
const height=useinnerhehight()
return {height}
},
    computed: {
        height() {
            return (
                String(this.height - this.top.replaceAll("px", "")) +
                "px"
            );
        },
    },
    props: ["html", "top"],
});
export function useinnerhehight(){
const height=ref(window.innerHeight)
const listener=debounce(() => {
                    requestAnimationFrame(() => {
                        width.value = window.innerHeight 
                    });
                })
onMounted(()=>{
window.addEventListener("resize",listener)
})
onUnmounted(()=>{
window.removeEventListener("resize",listener)
})
return height
}
