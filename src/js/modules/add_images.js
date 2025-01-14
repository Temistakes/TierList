import $ from "jquery";

// Dragn Drop:

import { mousedown } from "./dragn_drop";

// Methods:

function typeValidation(filename) {
    const regexp = /\w\.(png|jpg|jpeg|webp|svg|gif)$/;
    return regexp.test(filename.name);
}

export default function appendImg(input, container) {
    const { files } = input;

    if (files) {
        Array.from(files).forEach((file) => {
            if (typeValidation(file)) {
                const url = URL.createObjectURL(file);
                const element = $(`<img src='${url}' class='tier-item' alt='' />`);
                container.append(element);
                element.on("mousedown", (event) => mousedown(event, element.height()));
                element.on("dragstart", () => false);
                $(".tier-list__footer").css("border-top", "0.0625rem solid #000000");
            }
        });
    }

    input.files = null;
}
