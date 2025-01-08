import $ from "jquery";
import { rename } from "./rename.js";

// Methods

export function selectColor(element) {
    let colors = element.closest(".tier-modal__colors").querySelectorAll(".tier-modal__color-item");

    colors.forEach(item => {
        if (item === element) {
            $(item).toggleClass("tier-modal__color-item_active");
        }   else {
            $(item).removeClass("tier-modal__color-item_active");
        }
    });
}

export function setSettings(element) {
    let row = element.closest(".row");
    let symbol = row.find(".row__symbol");
    let items = row.find(".row__items");
    let color;

    function buttonsListener(event) {
        let element = $(event.currentTarget);
        let val = element.val();
        let newRow = `<div class="row">
                    <div class="row__symbol" style="background: #dde161; box-shadow: 0 0 0.625rem #dde161;">
                        <span class="row__symbol-text rename rename_black" data-length="50">
                            New
                        </span>
                    </div>

                    <div class="row__items">
                        
                    </div>

                    <div class="row__managment">
                        <a href="#" data-izimodal-open="#tier-modal" data-izimodal-zIndex="10000" class="row__settings-btn">
                            <svg width="19" height="19" viewBox="0 0 19 19" fill="white" xmlns="http://www.w3.org/2000/svg">
                                <path d="M17.3996 12.5L15.5796 11.2C15.8796 10.12 15.8996 8.95 15.5796 7.78L17.3996 6.5L15.9496 4L13.9196 4.92C13.1296 4.12 12.1296 3.5 10.9596 3.21L10.7596 1H7.85965L7.65965 3.21C6.48965 3.5 5.48965 4.12 4.69965 4.92L2.66965 4L1.21965 6.5L3.03965 7.78C2.71965 8.95 2.73965 10.12 3.03965 11.2L1.21965 12.5L2.66965 15L4.69965 14.07C5.48965 14.86 6.48965 15.46 7.65965 15.77L7.85965 18H10.7596L10.9596 15.77C12.1296 15.46 13.1296 14.86 13.9196 14.07L15.9496 15L17.3996 12.5ZM11.3096 0C11.5796 0 11.8096 0.2 11.8096 0.46L11.9896 2.5C12.7496 2.78 13.4296 3.19 14.0396 3.68L15.8896 2.81C16.1196 2.69 16.4096 2.77 16.5496 3L18.5496 6.5C18.6896 6.71 18.6096 7 18.3896 7.15L16.7196 8.32C16.8496 9.12 16.8396 9.91 16.7196 10.68L18.3896 11.85C18.6096 12 18.6896 12.29 18.5496 12.5L16.5496 16C16.4096 16.21 16.1196 16.29 15.8896 16.17L14.0396 15.31C13.4296 15.8 12.7496 16.2 11.9896 16.5L11.8096 18.5C11.8096 18.79 11.5796 19 11.3096 19H7.30965C7.17704 19 7.04986 18.9473 6.9561 18.8536C6.86233 18.7598 6.80965 18.6326 6.80965 18.5L6.62965 16.5C5.86965 16.2 5.18965 15.8 4.57965 15.31L2.72965 16.17C2.49965 16.29 2.20965 16.21 2.06965 16L0.0696488 12.5C-0.0703512 12.29 0.00964886 12 0.229649 11.85L1.89965 10.68C1.77965 9.91 1.76965 9.12 1.89965 8.32L0.229649 7.15C0.00964886 7 -0.0703512 6.71 0.0696488 6.5L2.06965 3C2.20965 2.77 2.49965 2.69 2.72965 2.81L4.57965 3.68C5.18965 3.19 5.86965 2.78 6.62965 2.5L6.80965 0.46C6.80965 0.2 7.03965 0 7.30965 0H11.3096ZM9.30965 6C10.2379 6 11.1281 6.36875 11.7845 7.02513C12.4409 7.6815 12.8096 8.57174 12.8096 9.5C12.8096 10.4283 12.4409 11.3185 11.7845 11.9749C11.1281 12.6313 10.2379 13 9.30965 13C8.38139 13 7.49115 12.6313 6.83478 11.9749C6.1784 11.3185 5.80965 10.4283 5.80965 9.5C5.80965 8.57174 6.1784 7.6815 6.83478 7.02513C7.49115 6.36875 8.38139 6 9.30965 6ZM9.30965 7C8.64661 7 8.01072 7.26339 7.54188 7.73223C7.07304 8.20107 6.80965 8.83696 6.80965 9.5C6.80965 10.163 7.07304 10.7989 7.54188 11.2678C8.01072 11.7366 8.64661 12 9.30965 12C9.97269 12 10.6086 11.7366 11.0774 11.2678C11.5463 10.7989 11.8096 10.163 11.8096 9.5C11.8096 8.83696 11.5463 8.20107 11.0774 7.73223C10.6086 7.26339 9.97269 7 9.30965 7Z" fill="inherit" />
                            </svg>
                        </a>

                        <div class="row__arrows">
                            <button class="row__arrow-btn row__arrow-btn_top">
                                <svg width="10" height="11" viewBox="0 0 10 11" fill="white" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4.61538 11V1.48376L0.576923 5.56215L0 5.04944L5 0L10 5.04944L9.42308 5.56215L5.38462 1.48376V11H4.61538Z" fill="inherit" />
                                </svg>
                            </button>

                            <button class="row__arrow-btn row__arrow-btn_bottom">
                                <svg width="10" height="11" viewBox="0 0 10 11" fill="white" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5.38462 0V9.51624L9.42308 5.43785L10 5.95056L5 11L0 5.95056L0.576923 5.43785L4.61538 9.51624V0H5.38462Z" fill="inherit" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>`;
        let newElement;
    
        switch (val) {
            case ("delete"):
                if ($(".row").length > 1) {
                    $("#tier-modal").iziModal("close");
                    row.remove();
                }   else {
                    alert("Вы не можете удалить последнюю строчку!");
                }
            break;

            case ("clear"):
                items.find(".tier-item").addClass("none");
            break;

            case ("before"):
                newElement = $(newRow);
                row.after(newElement);
                newElement.find(".row__settings-btn").click((event) => setSettings($(event.currentTarget)));
                newElement.find(".rename").click((event) => rename($(event.currentTarget)));
            break;

            case ("after"):
                newElement = $(newRow);
                row.before(newElement);
                newElement.find(".row__settings-btn").click((event) => setSettings($(event.currentTarget)));
                newElement.find(".rename").click((event) => rename($(event.currentTarget)));
            break;
        }
    }

    function end() {
        color = $("#tier-modal").find(".tier-modal__color-item_active");

        if (color.hasClass("tier-modal__color-item_input")) {
            symbol.css({
                background: color.find("input").val(),
                boxShadow: `0 0 0.625rem ${color.find("input").val()}`,
            });
        }   else {
            symbol.css({
                background: color.find("button").val(),
                boxShadow: `0 0 0.625rem ${color.find("button").val()}`,
            });
        }

        $("#tier-modal .tier-modal__btn").off("click", buttonsListener);
        $("#tier-modal .tier-modal__color-item").removeClass("tier-modal__color-item_active");
        $(document).off("closing", "#tier-modal", end);

        items.find(".tier-item.none").remove();
    }

    $(document).on("closing", "#tier-modal", end);

    $("#tier-modal .tier-modal__btn").on("click", buttonsListener);
}