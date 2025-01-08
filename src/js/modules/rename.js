import $ from "jquery";

// Methods

export function rename(element) {
    let text = element.text().trim();
    let input = $(`<input type="text" placeholder="${text}" class="rename-input">`);
    let maxLength = element.attr("data-length");
    let wrapWidth = element.parent().width();

    element.slideUp(300);
    element.wrap("<div class='rename-wrap'></div>");
    element.before(input);

    if (+element.parent().width() >= wrapWidth - 10) element.parent().css("width", "100%");

    input.css({
        width: element.width() + "px",
        display: "none",
    });
    input.attr("maxlength", maxLength);
    input.slideDown(300);
    input.focus();

    if (element.hasClass("rename_black")) input.addClass("rename-input_black");

    function end() {
        element.slideDown(300);
        if (input.val()) {
            if (+input.val().length <= +maxLength) {
                element.text(input.val());
            }
        }
        input.remove();
        element.unwrap();
    }

    input.on("blur", end);
    input.on("change", end);
}