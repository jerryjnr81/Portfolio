// HAMBURGER

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

//scroll reveal

ScrollReveal({ 
    // reset: true ,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: "top" });
ScrollReveal().reveal('.home-img, .about-img, .service-container, .project-box, .contact form', { origin: "bottom" });
ScrollReveal().reveal('.home-content h1, .about-content h2, .service-box, .about-content h3', { origin: "left" });
ScrollReveal().reveal('.home-content p, .about-content p, .service-box h3, .project-box h3, .contact h2', { origin: "right" });



const activePage = window.location.pathname;
const navLinks = document.querySelectorAll(".navbar a").
forEach(link => {
    if(link.href.includes(`${activePage}`)) {
        link.classList.add("active");
    }
})


//contact me




// //TYPED JS
// const typed = new Typed('.multiple-text', {
//     strings: ['Web Developer', 'Frontend Developer', 'Backend Developer', 'Full Stack Developer'],
//     typeSpeed: 100,
//     backSpeed: 100,
//     backDelay: 1000,
//     loop: true
// });