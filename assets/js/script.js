setTimeout(loading,3000) //! RICORDATI DI MODIFICARE

function loading() {
    let spinnerContainer = document.querySelector(".spinner-container");
    spinnerContainer.style.display = "none"
}

window.onscroll = function(e) {
    let img = document.querySelectorAll('img');
        img.forEach(element => {element.classList.toggle('fadein')})
}

let invertMode = document.getElementById("invert-mode");
invertMode.addEventListener("click", function () {document.body.classList.toggle("invert-mode")});


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

