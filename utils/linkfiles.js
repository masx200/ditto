"use strict";
const filelist = ["docs", "summary.md", "README.md"];
const fsextra = require("fs-extra");

const fs = require("fs");
const fsPromises =fs.promises;
// require("fs/promises");

const path = require("path");

const basepath = path.join(__dirname, "../");

const destpath = path.join(basepath, "dist", "linkfiles");
const process = require("process");
process.on("unhandledRejection", (e) => {
    throw e;
});
!(async function () {
    const parse = (await import("@masx200/mini-cli-args-parser")).default;
    const args = process.argv.slice(2);
    const opts = parse(args);
    console.log(opts);
    const type = opts["type"] || "link";
    console.log("type:", type);
    if (type === "copy") {
        console.log("copyfiles:");
    } else if (type === "link") {
        console.log("symlinkfiles:");
    } else {
        throw new Error("invalid type:" + type);
    }

    await fsextra.remove(destpath);
    await fsextra.ensureDir(destpath);

    for (let p of filelist) {
        const srcfile = path.join(basepath, p);

        const destfile = path.join(destpath, p);
        if (type === "copy") {
            await fsextra.copy(srcfile, destfile);
        } else {
            await fsextra.ensureSymlink(srcfile, destfile);
        }
        console.log(srcfile, "->", destfile);
    }
})();
