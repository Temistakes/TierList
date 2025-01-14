import html2canvas from "html2canvas";

// Methods

export default function download(tierlist) {
    html2canvas(tierlist).then((canvas) => {
        const link = document.createElement("a");
        link.download = "TierList";
        link.href = canvas.toDataURL();
        link.click();
    });
}
