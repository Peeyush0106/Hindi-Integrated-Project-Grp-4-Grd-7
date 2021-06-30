function displayIframe() {
    document.getElementById("iframeDisplay").innerHTML = '<iframe id="presentation" src="https://sway.office.com/s/Y2p3a5ecTTUM9vlF/embed" frameborder="0" marginheight="0"marginwidth="0" max-width="100%" sandbox="allow-forms allow-modals allow-orientation-lock allow-popups allow-same-origin allow-scripts" scrolling="no" style="border: none; max-width: 100%; max-height: 100vh; width="100%"; height="100%"" allowfullscreen mozallowfullscreen msallowfullscreen webkitallowfullscreen></iframe>';
    document.getElementById("iframeDisplay").style.display = "block";
    hideButtons();
    document.getElementById("back-button").style.display = "block";
    document.getElementById("presentation").width = window.screen.width - 270;
    document.getElementById("presentation").height = window.screen.height - 270;
    document.getElementById("marquee-txt").style.display = "none";
    document.getElementById("app-cretor-txt").style.display = "none";
}
function showCore() {
    hideButtons();
    document.getElementById("core-table").style.display = "block";
    document.getElementById("back-button").style.display = "block";
}
function hideButtons() {
    document.getElementById("button1").style.display = "none";
    document.getElementById("button2").style.display = "none";
}
function showHomePage() {
    location.reload();
}