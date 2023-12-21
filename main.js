const img = document.querySelectorAll(".img--")

document.addEventListener("DOMContentLoaded", () => {
    scrollNav();
    navegaciónFija()
})

function scrollNav() {
    const enlaces = document.querySelectorAll(".nav__ul a");
    enlaces.forEach(enlace => {
        enlace.addEventListener("click", () => {
            enlace.scrollIntoView();
        })
    })
}

function navegaciónFija() {

    const barra = document.querySelector(".header");

    const observer = new IntersectionObserver((entries) => {
        if (barra, entries[0].isIntersecting) {
            barra.classList.add("fija")
        } else {
            barra.classList.remove("fija")
        }
    })


    observer.observe(document.querySelector(".lineup"))
}

