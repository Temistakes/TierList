// Libraries

import fslightbox from "fslightbox";
import "./modules/sliders.js";
import $ from "jquery";

// Add Img

import { appendImg } from "./modules/add_images.js";

$(".files__input").on("change", (event) => {
    let container = $(".row:last-child .row__items");
    console.log("f");
    appendImg(event.target, container);
});

