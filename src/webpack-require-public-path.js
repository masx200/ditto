// // module.exports = require.p;
// // export default import.meta;
// console.log(require);
// const __weaaaaaaaaaabpack_require__ = require;

// module.exports = new Function("r", `return r.p`)(__weaaaaaaaaaabpack_require__);
// /*   // __webpack_public_path__
//     /******/
// // __webpack_require__.p = "/"; */


export default new URL(".",__webpack_public_path__)
//module.exports = new URL(".", document.currentScript.src);
