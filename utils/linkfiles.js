"use strict";
const filelist = ["docs", "summary.md", "README.md"];
const fsextra = require("fs-extra");

const fs = require("fs");
const fsPromises = require("fs/promises");
console.log("linkfiles:");
const path = require("path");

const basepath = path.join(__dirname, "../");

const destpath = path.join(basepath, "dist", "linkfiles");
const process = require("process");
process.on("unhandledRejection", (e) => {
    throw e;
});
!(async function () {
    await fsextra.ensureDir(destpath);

    for (let p of filelist) {
        const srcfile = path.join(basepath, p);

        const destfile = path.join(destpath, p);

        await fsextra.ensureSymlink(srcfile, destfile);
        console.log("symlink:\n", srcfile, "->", destfile);
    }
})();
