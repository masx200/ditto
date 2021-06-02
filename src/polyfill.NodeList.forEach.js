"use strict";
if (window.NodeList && !NodeList.prototype.forEach) {
    Reflect.set(NodeList.prototype, "forEach", Array.prototype.forEach);
}
