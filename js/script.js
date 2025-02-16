const toggle = document.querySelector("#toggle")
const navbar = document.querySelector(".nav-link")

toggle.onclick = function () {
    navbar.classList.toggle("active")
    toggle.querySelector("i").classList.toggle("fa-xmark")
}

$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
        items: 1,
        loop: true,
        autoplay: true,
        autoplayTimeout: 7000,
        dots: false,
        nav: true,
    });
});

const up = document.querySelector('#up');

up.onclick = () => {
    window.scrollTo(0, 0,);
}

window.onscroll = () => {
    if (window.scrollY >= 400) {
        up.style.display = "flex"
    } else {
        up.style.display = "none"
    }
}

const sections = document.querySelectorAll('section')
const links = document.querySelectorAll('.nav-link a')

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            activelink = entry.target.getAttribute('id');
            links.forEach(link => link.classList.remove('active'));
            document.querySelector(`.nav-link a[href="#${activelink}"]`).classList.add('active');
        }
    })
}, {threshold: 0.5})

sections.forEach(function(section) {
    observer.observe(section);
})
