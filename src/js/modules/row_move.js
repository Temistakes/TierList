import $ from "jquery";

// Methods

export function moveToTop(element) {
    if (element.prev()) {
        element.insertBefore(element.prev());
    }
}

export function moveToBottom(element) {
    if (element.next()) {
        element.insertAfter(element.next());
    }
}