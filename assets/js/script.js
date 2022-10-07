setTimeout(loading,000) //! RICORDATI DI MODIFICARE

function loading() {
    let spinnerContainer = document.querySelector(".spinner-container");
    spinnerContainer.style.display = "none"
}

window.onscroll = function(e) {
    let img = document.querySelectorAll('img');
        img.forEach(element => {element.classList.toggle('fadein')})
}