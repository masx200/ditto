//@ts-ignore
import Vue from "vue";
//@ts-ignore
import { getappvm } from "./appvm.ts"; //@ts-ignore
import config from "./config.ts";
//@ts-ignore
import { stop_loading } from "./ditto.ts";
import { scrolltoelement } from "./scrolltoelement";
import { states } from "./states";
//@ts-ignore
import { setnextpagelink, setprevpagelink } from "./toprevpage.ts";

export { loaddone };
const { cachetitle } = states;
async function loaddone() {
    await Vue.nextTick();
    const appvm = getappvm();

    stop_loading();
    Reflect.set(appvm, "showsrc", true);
    let path = Reflect.get(appvm, "urltext");
    let mdtitle = cachetitle.get(path);

    document.title = mdtitle
        ? mdtitle + " - " + config.maintitle
        : config.maintitle;

    stop_loading();
    //         res();
    //     });
    // });

    Reflect.set(appvm, "showerror", false);

    await Vue.nextTick();
    setnextpagelink();
    setprevpagelink();
    await Vue.nextTick();
    Array.from(document.querySelectorAll("a")).forEach((e) => {
        if (
            e.hash === "#" + path ||
            (location.hash.length > 1 && e.hash === location.hash)
        ) {
            e.classList.add("active");
            requestAnimationFrame(() => {
                scrolltoelement(e);
            });
        } else {
            e.classList.remove("active");
        }
    });
}
