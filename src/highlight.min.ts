//@ts-nocheck
import c from "highlight.js/lib/languages/c";

import css from "highlight.js/lib/languages/css";
import java from "highlight.js/lib/languages/java";
import javascript from "highlight.js/lib/languages/javascript";
import json from "highlight.js/lib/languages/json";
import powershell from "highlight.js/lib/languages/powershell";
import python from "highlight.js/lib/languages/python";
import shell from "highlight.js/lib/languages/shell";
import typescript from "highlight.js/lib/languages/typescript";
import xml from "highlight.js/lib/languages/xml";
import hljs from "./js/highlight.min.js";

export default hljs;
hljs.registerLanguage("javascript", javascript);
hljs.registerLanguage("typescript", typescript);
hljs.registerLanguage("json", json);
hljs.registerLanguage("xml", xml);
hljs.registerLanguage("css", css);
hljs.registerLanguage("powershell", powershell);

hljs.registerLanguage("shell", shell);
hljs.registerLanguage("c", c);
hljs.registerLanguage("java", java);
hljs.registerLanguage("python", python);
