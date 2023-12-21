document.addEventListener("DOMContentLoaded", function () {
    scrollNav(); intersección()
})


function scrollNav() {
    const enlaces = document.querySelectorAll(".div-- a")
    enlaces.forEach(enlace => {
        enlace.addEventListener("click", (e) => {
            e.preventDefault();
            const seccion = document.querySelector(e.target.attributes.href.value);
            seccion.scrollIntoView({ behavior: "smooth" })
        })
    })
}

function intersección() {
    const body = document.querySelector(".body")

    const observer = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
            body.classList.add("body-active")
        } else {
            body.classList.remove("body-active")
        }
    })
    observer.observe(document.querySelector(".target"))
}