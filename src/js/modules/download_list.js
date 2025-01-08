import $ from "jquery";
import html2canvas from "html2canvas";

// Methods

export function download(tierlist) {
    html2canvas(tierlist).then(canvas => {
        let link = document.createElement("a");
        link.download = "TierList";
        link.href = canvas.toDataURL();
        link.click();
    });
}