// * START SPINNER LOADING
setTimeout(loading,3000)
function loading() {
    let spinnerContainer = document.querySelector(".spinner-container");
    spinnerContainer.style.display = "none"
}
// ! END SPINNER LOADING

// * START FADE IMG
let img = document.querySelectorAll('img');
img.forEach(element => {
    element.classList.add("fadingXinput");
});

window.onscroll = function(e) {
    img.forEach(element => {
        var distInView = element.getBoundingClientRect().top - window.innerHeight + 20;
        if (distInView < 0) {
            element.classList.add('fadein');
            element.classList.add("fadingXoutput");
        } else {
            element.classList.remove('fadein');
            element.classList.remove("fadingXoutput");
        }
    })
}
// ! END FADE IMG

// * START REVERSE MODE
let invertMode = document.getElementById("invert-mode");
invertMode.addEventListener("click", invertHeartMode);
// ! END REVERSE MODE

// * START HEART MODE
let heartMode = document.getElementById("heart-mode");
let clicked = false;
let interval 
let rexAudio = new Audio("https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3");
let heartAudio = new Audio("https://www.soundjay.com/human/sounds/heartbeat-04.mp3");
heartMode.addEventListener("click", function () {
    if (clicked == true) {
        clicked = false;
        heartMode.children[0].classList.toggle("bi-heart-pulse");
        heartMode.children[0].classList.toggle("bi-heart-pulse-fill");
        document.body.classList.remove("invert-mode")
        rexAudio.pause();
        heartAudio.pause();
        clearInterval(heart);
    } else {
        clicked = true;
        heartMode.children[0].classList.toggle("bi-heart-pulse");
        heartMode.children[0].classList.toggle("bi-heart-pulse-fill");
        document.body.classList.add("invert-mode")
        rexAudio.currentTime = 0;
        heartAudio.currentTime = 0;
        rexAudio.play();
        heartAudio.play();
        heart = setInterval(invertHeartMode, 300)
    }
});

function start() {
    heart = setInterval(invertHeartMode, 300)
}
function stop() {
    clearInterval(invertHeartMode)
}
function invertHeartMode() {
    document.body.classList.toggle("invert-mode")
}
// ! END HEART MODE

// * START LIGHTMODE
let lightMode = document.getElementById("light-mode");
lightMode.addEventListener("click", function () {
    document.getElementById("home").classList.toggle("light-mode");
    document.getElementById("partnership").classList.toggle("light-mode");
    document.querySelector("footer").classList.toggle("light-mode");
    let paragraph = document.querySelectorAll("p");
    paragraph.forEach(element => {
        element.classList.toggle("invert-mode");
    });
    document.getElementById("testimonianze").classList.toggle("invert-mode");
    document.querySelectorAll(".w-50").forEach(e => {
        e.classList.toggle("invert-mode")
    })
})
// ! END LIGHTMODE
