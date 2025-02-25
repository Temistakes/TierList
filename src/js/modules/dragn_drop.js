import $ from "jquery";

// Methods:

export function mousedown(event, height) {
    if (localStorage.getItem("processed") === "true") return;
    localStorage.setItem("processed", "true");

    let element = $(event.currentTarget);
    let currentParrent = event.currentTarget.parentElement;
    let jsElement = event.currentTarget;

    let shiftX = event.clientX - event.currentTarget.getBoundingClientRect().left;
    let shiftY = event.clientY - event.currentTarget.getBoundingClientRect().top;

    let copy = element.clone();

    copy.css("opacity", "0.3");
    element.after(copy);
    
    $(document.body).append(element);
    element.css({
        position: "absolute",
        height: height + "px",
        zIndex: 1000,
    });

    movedElement(event);

    function move(x, y) {
        element.css({
            top: y + "px",
            left: x + "px",
        });
    }

    function movedElement(event) {
        move(event.pageX - shiftX, event.pageY - shiftY);

        jsElement.hidden = true;
        let parentElement = document.elementFromPoint(event.pageX, event.pageY)?.closest(".row__items, .tier-list__items");
        jsElement.hidden = false;

        if (!parentElement) return;

        if (currentParrent != parentElement) {
            currentParrent = parentElement;
            $(currentParrent).append(copy);

            if ($(".tier-list__items").children().length === 0) {
                $(".tier-list__footer").css("border-top", "none");
            }
        }
    }

    $(document.documentElement).on("mousemove", movedElement);

    $(document.documentElement).on("mouseup", () => {
        $(document.documentElement).off("mousemove", movedElement);
        $(currentParrent).append(element);
        element.css("position", "static");
        copy.remove();
        localStorage.setItem("processed", "false");
    });
}