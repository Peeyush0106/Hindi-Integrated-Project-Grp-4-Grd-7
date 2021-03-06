var music, musicLoaded, musicVol, setVol, videoHadStarted;

setVol = true;
videoHadStarted = false;

function preload() {
    music = loadSound("Favorite-Audio.mp3", setMusicVol());
}

function setMusicVol() {
    musicLoaded = true;
}

function draw() {
    if (setVol) {
        if (document.getElementById("iframeDisplay").innerHTML !== "") {
            musicVol = 0.3;
            document.getElementById("volume-slider").value = 3;
            setVol = false;
        }
        if (document.getElementById("additional-info").style.display === "block") {
            musicVol = 0;
            document.getElementById("volume-slider").value = 0;
            setVol = false;
        }
        if (document.getElementById("back-button").style.display === "none") {
            musicVol = 0.6;
            document.getElementById("volume-slider").value = 6;
            setVol = false;
        }
    }
    if (musicLoaded) {
        music.loop();
        musicLoaded = false;
        // alert("If the background music has not started, please refresh the page. If you can hear some music, then you are ready to continue.");
    }
    music.setVolume(musicVol);
}

function setup() {
    canvas = createCanvas(1, 1);
}

function displayIframe() {
    document.getElementById("iframeDisplay").innerHTML = '<iframe id="presentation" src="https://sway.office.com/s/Y2p3a5ecTTUM9vlF/embed" frameborder="0" marginheight="0"marginwidth="0" max-width="100%" sandbox="allow-forms allow-modals allow-orientation-lock allow-popups allow-same-origin allow-scripts" scrolling="no" style="border: none; max-width: 100%; max-height: 100vh; width="100%"; height="100%"" allowfullscreen mozallowfullscreen msallowfullscreen webkitallowfullscreen></iframe>';
    document.getElementById("iframeDisplay").style.display = "block";
    hideButtons();
    document.getElementById("back-button").style.display = "block";
    document.getElementById("presentation").width = window.screen.width - 270;
    document.getElementById("presentation").height = window.screen.height - 270;
    document.getElementById("iframeDisplay").focus();
    document.getElementById("marquee-txt").style.display = "none";
    setVol = true;
}
function showAdditionalInfo() {
    hideButtons();
    document.getElementById("marquee-txt").style.display = "none";
    document.getElementById("additional-info").style.display = "block";
    document.getElementById("back-button").style.display = "block";
    setVol = true;
    videoHadStarted = true;
    if (music) {
        music.stop();
    }
    document.getElementById("volume-info").innerHTML = "";
}
function hideButtons() {
    document.getElementById("button1").style.display = "none";
    document.getElementById("button2").style.display = "none";
}
function showHomePage() {
    if (videoHadStarted) {
        location.reload();
    }
    else {
        document.getElementById("iframeDisplay").style.display = "none";
        document.getElementById("additional-info").style.display = "none";
        document.getElementById("back-button").style.display = "none";
        document.getElementById("button1").style.display = "block";
        document.getElementById("button2").style.display = "block";
        document.getElementById("marquee-txt").innerHTML = '<h1 style="color: blue"> Hindi Integrated Project Group 4 - 7E</h1><h1 style="color: orange"> - by Peeyush Agarwal</h1>';
        document.getElementById("marquee-txt").style.display = "block";
        setVol = true;
    }
}

function changeVolume() {
    musicVol = (parseInt((document.getElementById("volume-slider").value)) / 10);
}