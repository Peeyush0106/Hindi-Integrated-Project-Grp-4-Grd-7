document.getElementById("bg-music").volume = 0.06;

function displayIframe() {
    document.getElementById("iframeDisplay").innerHTML = '<iframe id="presentation" src="https://sway.office.com/s/Y2p3a5ecTTUM9vlF/embed" frameborder="0" marginheight="0"marginwidth="0" max-width="100%" sandbox="allow-forms allow-modals allow-orientation-lock allow-popups allow-same-origin allow-scripts" scrolling="no" style="border: none; max-width: 100%; max-height: 100vh; width="100%"; height="100%"" allowfullscreen mozallowfullscreen msallowfullscreen webkitallowfullscreen></iframe>';
    document.getElementById("iframeDisplay").style.display = "block";
    hideButtons();
    document.getElementById("back-button").style.display = "block";
    document.getElementById("presentation").width = window.screen.width - 270;
    document.getElementById("presentation").height = window.screen.height - 270;
    document.getElementById("presentation").focus();
    document.getElementById("marquee-txt").innerHTML = "";
    document.getElementById("app-cretor-txt").style.display = "none";
    document.getElementById("bg-music").volume = 0.035;
    document.getElementById("volume-slider").value = 3.5;
}
function showCore() {
    hideButtons();
    document.getElementById("core-table").style.display = "block";
    document.getElementById("back-button").style.display = "block";
    document.getElementById("bg-music").volume = 0.05;
    document.getElementById("volume-slider").value = 5;
}
function hideButtons() {
    document.getElementById("button1").style.display = "none";
    document.getElementById("button2").style.display = "none";
}
function showHomePage() {
    document.getElementById("iframeDisplay").style.display = "none";
    document.getElementById("core-table").style.display = "none";
    document.getElementById("back-button").style.display = "none";
    document.getElementById("button1").style.display = "block";
    document.getElementById("button2").style.display = "block";
    document.getElementById("marquee-txt").innerHTML = '<h1 style = "color: blue" > Hindi Integrated Project Group 4 - 7E</h1 > <h1 style="color: orange"> - by Peeyush</h1>';
    document.getElementById("bg-music").volume = 0.07;
    document.getElementById("volume-slider").value = 7;
}

function changeVolume() {
    document.getElementById("bg-music").volume = parseInt((document.getElementById("volume-slider").value)) / 100;
    console.log(document.getElementById("bg-music").volume);
}