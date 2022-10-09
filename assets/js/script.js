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
invertMode.addEventListener("click", function () {document.body.classList.toggle("invert-mode")});
// ! END REVERSE MODE

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
