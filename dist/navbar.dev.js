"use strict";

// Responsive Navbar JavaScript - R & Design 4.0
console.log('Navbar');

var navSlide = function navSlide() {
  var burger = document.querySelector('.burger');
  var nav = document.querySelector('.nav-links');
  var navLinks = document.querySelectorAll('.nav-links li');
  var bodyElement = document.body;
  burger.addEventListener('click', function () {
    // Navigation Toggling
    nav.classList.toggle('active-nav');
    /* if (bodyElement.style.animation) {
        bodyElement.style.animation = ''
    } else {
        bodyElement.style.animation = `bodyFilterFade 0.25s ease`
    } */
    // Link Animations

    navLinks.forEach(function (link, index) {
      if (link.style.animation) {
        link.style.animation = '';
      } else {
        link.style.animation = "navLinkFade 0.25s ease forwards ".concat(index / 7 + 0.24, "s");
      }
    }); // Burger Animations

    burger.classList.toggle('toggle');
  });
}; // App Wide Function Calls


navSlide();