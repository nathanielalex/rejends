var x = document.getElementById("menu");

function openMenu() {
    if (x.style.display === "flex") {
        x.style.display = "none";
    } else {
        x.style.display = "flex";
    }
}

function myFunction(responsive) {
    if (!responsive.matches) { // If media query matches
        x.style.display = "flex";
    } 
    // else {
    //     document.body.style.backgroundColor = "pink";
    // }
}

// Create a MediaQueryList object
var responsive = window.matchMedia("(max-width: 768px)");

// Call listener function at run time
myFunction(responsive);

// Attach listener function on state changes
responsive.addEventListener("change", function() {
    myFunction(responsive);
});





// script.js
// document.addEventListener('DOMContentLoaded', () => {
//     const hamburgerMenu = document.getElementById('hamburger-menu');
//     const navMenu = document.getElementById('nav-menu');

//     hamburgerMenu.addEventListener('click', () => {
//         navMenu.style.display = navMenu.style.display === 'block' ? 'none' : 'block';
//     });
// });
