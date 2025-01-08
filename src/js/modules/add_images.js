import $ from "jquery";

// Dragn Drop

import { mousedown } from "./dragn_drop.js";

// Methods:

function typeValidation(filename) {
    let regexp = /\w\.(png|jpg|jpeg|webp|svg|gif)$/;
    return regexp.test(filename.name);
}

export function appendImg(input, container) {
    let files = input.files;

    if (files) {
        Array.from(files).forEach(file => {
            if (typeValidation(file)) {
                let url = URL.createObjectURL(file);
                let element = $(`<img src='${url}' class='tier-item' alt='' />`);
                container.append(element);
                element.on("mousedown", (event) => mousedown(event, element.height()));
                element.on("dragstart", () => false);
                $(".tier-list__footer").css("border-top", "0.0625rem solid #000000");
            }
        });
    }

    input.files = null;
}