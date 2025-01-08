// Libraries

import fslightbox from "fslightbox";
import "./modules/sliders.js";
import "./modules/modals.js";
import $ from "jquery";

// Add Img

import { appendImg } from "./modules/add_images.js";

$(".files__input").on("change", (event) => {
    let container = $(".row:last-child .row__items");
    appendImg(event.target, container);
});

// Row Move

import { moveToTop, moveToBottom } from "./modules/row_move.js";

$(".row__arrow-btn_top").click((event) => {
    moveToTop($(event.currentTarget.closest(".row")));
});

$(".row__arrow-btn_bottom").click((event) => {
    moveToBottom($(event.currentTarget.closest(".row")));
});

// Drop Downs

import { toggleDropDown, selectValue } from "./modules/drop_down.js";

$(".select-input__input").click((event) => {
    toggleDropDown($(event.currentTarget));
});

$(".drop-down__btn").click((event) => {
    selectValue($(event.currentTarget));
});

// Rename

import { rename } from "./modules/rename.js";

$(".rename").click((event) => {
    rename($(event.currentTarget));
});

// Row Settings

import { selectColor, setSettings } from "./modules/row_settings.js";

$(".row__settings-btn").on("click", (event) => {
    setSettings($(event.currentTarget));
});

$(".tier-modal__color-item").click((event) => {
    selectColor(event.currentTarget);
});

$(".tier-modal__color-input").click((event) => {
    event.stopPropagation();
});