
function download() {
    var element = document.createElement('a');
    element.setAttribute('href', '' + encodeURIComponent("StudentUndertaking2025.pdf"));
    element.setAttribute('download', "StudentUndertaking2025.pdf");
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
}

document.getElementById("btnd")
    .addEventListener("click", function () {

        download();
    }, false);