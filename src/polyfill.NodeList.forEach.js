//https://developer.mozilla.org/zh-CN/docs/Web/API/NodeList/forEach
//对象不支持“forEach”属性或方法
if (window.NodeList && !NodeList.prototype.forEach) {
    NodeList.prototype.forEach = Array.prototype.forEach;
}
