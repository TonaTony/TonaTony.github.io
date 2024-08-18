//toggle icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
const header = 
menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}


// Typing animation
var typed = new Typed(".multiple-text", {
   strings: ["Programmer", "Developer", "IT technician", "Entrepreneur"],
   typeSpeed: 100,
   backSpeed: 100,
   backDelay: 1000,
   loop: true 
})

//Dark mode
function darkmode() {
    const wasDarkmode = localStorage.getItem('darkmode') === 'true';
    localStorage.setItem('darkmode', !wasDarkmode);
    const element = document.body;
    element.classList.toggle('dark-mode', !wasDarkmode);
}

function onload() {
    document.body.classList.toggle('dark-mode', localStorage.getItem('darkmode') === 'true');
}