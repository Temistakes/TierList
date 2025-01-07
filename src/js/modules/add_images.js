import $ from "jquery";

// Dragn Drop

import { mousedown } from "./dragn_drop.js";

// Methods:

function typeValidation(filename) {
    let regexp = /\w\.(png|jpg|jpeg|webp|svg|gif)$/;
    return regexp.test(filename.name);
}

export function appendImg(input, container) {
    let file = input.files[0];
    let url, element;

    if (file && typeValidation(file)) {
        url = URL.createObjectURL(file);
        element = $(`<img src='${url}' class='tier-item' alt='' />`);
        container.append(element);
        element.on("mousedown", (event) => mousedown(event, element.height()));
        element.on("dragstart", () => false);
    }
}