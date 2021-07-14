//@ts-ignore
import { Adjustthedistance } from "./Adjustthedistance.ts";
//@ts-ignore
import { eventtarget } from "./eventtarget.ts";
//@ts-ignore
import { routerpagegethandler } from "./routerpageget.ts";
//@ts-ignore
import { 内容调整左边偏移 } from "./内容调整左边偏移.ts";
eventtarget.addEventListener(
    "mount",

    () => {
        window.addEventListener("hashchange", routerpagegethandler);

        window.addEventListener("resize", Adjustthedistance);
        window.addEventListener("resize", 内容调整左边偏移);
    },
    { once: true }
);
