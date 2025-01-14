// Methods

function inputListener(val) {
    setTimeout(() => {
        switch (val) {
        case ("quadro"):
            alert("--__--");
            break;

        case ("why"):
            alert("А вы знали, какая длина пенсила кита? Нет? Тогда знайте - приблизительно 170 см, это почти как рост среднего человека!");
            break;

        default:
            alert("ご清聴ありがとうございました。感謝の意を表したいと思います");
            break;
        }
    }, 500);
}

export function toggleDropDown(element) {
    element.next().slideToggle(300);
    element.toggleClass("select-input__input_active");
}

export function selectValue(element) {
    const input = element.closest(".select-input").find(".select-input__input-hidden");
    const button = element.closest(".select-input").find(".select-input__input");
    const currentValue = element.val();
    const currentText = element.text();

    input.val(currentValue);
    button.find(".select-input__input-text").text(currentText);

    toggleDropDown(button);
    inputListener(input.val());
}
