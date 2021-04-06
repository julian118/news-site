function removeCookies() {
    var cookieBox = document.getElementById("cookies-tab");

    cookieBox.style.top = "-100%"
}
function askForCookies() {
    var cookieBox = document.getElementById("cookies-tab");
    cookieBox.style.opacity = "1";
    cookieBox.style.top = "0";

}
function openWindow(url) {
    window.open(url);
  }