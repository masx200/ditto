"use strict";
import $ from "jquery";
import { ApphomeVm } from "./mark-down-reader.js";

export async function Adjustthedistance() {
    return new Promise<void>((r) => {
        requestAnimationFrame(() => {
            // scrollTo(0, 0);
            $("#mybody-143af32b9b8f396b798aeb8d4ee68ed9ca3").css(
                "padding-top",
                Number(
                    $(
                        "#mynavigationbar-dceff036a563faf668b4d4a50fd702d1d95"
                    ).height()
                )
            );
            $(
                ApphomeVm.$refs.Mysidebar_c41e47b3b3bbc85fdbb7dbba7d3a0743644
            ).css(
                "top",
                Number(
                    $(
                        "#mynavigationbar-dceff036a563faf668b4d4a50fd702d1d95"
                    ).height()
                )
            );
            if (window.innerWidth < 550) {
                //@ts-ignore
                ApphomeVm.xianshicebianlan = false;
            }
            r();
        });
    });
}