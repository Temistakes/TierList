// Start Settings

// Libraries

import $ from "jquery";

// Add Img

import appendImg from "./modules/add_images";

// Row Move

import { moveToTop, moveToBottom } from "./modules/row_move";

// Drop Downs

import { toggleDropDown, selectValue } from "./modules/drop_down";

// Rename

import { rename } from "./modules/rename";

// Row Settings

import { selectColor, setSettings } from "./modules/row_settings";

// Download Tierlist

import download from "./modules/download_list";

localStorage.setItem("processed", "false");

$(".files__input").on("change", (event) => {
    const container = $(".tier-list__items");
    appendImg(event.target, container);
});

$(".row__arrow-btn_top").click((event) => {
    moveToTop($(event.currentTarget.closest(".row")));
});

$(".row__arrow-btn_bottom").click((event) => {
    moveToBottom($(event.currentTarget.closest(".row")));
});

$(".select-input__input").click((event) => {
    toggleDropDown($(event.currentTarget));
});

$(".drop-down__btn").click((event) => {
    selectValue($(event.currentTarget));
});

$(".rename").click((event) => {
    rename($(event.currentTarget));
});

$(".row__settings-btn").on("click", (event) => {
    setSettings($(event.currentTarget));
});

$(".tier-modal__color-item").click((event) => {
    selectColor(event.currentTarget);
});

$(".tier-modal__color-input").click((event) => {
    event.stopPropagation();
});

$(".tier-list__download-btn").click(() => {
    download(document.querySelector(".tier-list__rows"));
});
