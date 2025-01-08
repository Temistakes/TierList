import $ from "jquery";

// Methods

export function toggleDropDown(element) {
    element.next().slideToggle(300);
    element.toggleClass("select-input__input_active");
}

export function selectValue(element) {
    let input = element.closest(".select-input").find(".select-input__input-hidden");
    let button = element.closest(".select-input").find(".select-input__input");
    let currentValue = element.val();
    let currentText = element.text();

    input.val(currentValue);
    button.find(".select-input__input-text").text(currentText);

    toggleDropDown(button);
    inputListener(input.val());
}

function inputListener(val) {
    setTimeout(() => {
        switch (val) {
            case ("quadro"):
                alert("--__--");
                break;

            case ("why"):
                alert("А вы знали, какая длина пенсила кита? Нет? Тогда знайте - приблизительно 170 см, это почти как рост среднего человека!");
                break;

            case ("..."):
                alert("ご清聴ありがとうございました。感謝の意を表したいと思います");
                break;
        }
    }, 500);
}