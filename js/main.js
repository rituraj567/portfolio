/*--jQuery Ripple Effect-*/
jQuery(document).ready(function () {
  "use strict";
  $("#showcase").ripples({
    dropRadius: 13,
    perturbance: 0.01,
  });
});

/*--Typed.js Effect-*/

var text = new Typed(".text", {
  strings: [
    "<strong>I'm a web</strong> <strong class='text-warning'> developer</strong>",
    "<strong>A</strong>  <strong class='text-warning'>programmer</strong>",
    "<strong>And a </strong> <strong class='text-warning'>coder</strong>",
  ],
  typeSpeed: 0,
  backSpeed: 0,
  fadeOut: true,
  loop: true,
});

/*--Wow.js Effect-*/

new WOW().init();

/*-- Global site tag (gtag.js) - Google Analytics --*/

window.dataLayer = window.dataLayer || [];

function gtag() {
  dataLayer.push(arguments);
}
gtag("js", new Date());
gtag("config", "UA-121109327-1");

const yearEl = document.querySelector(".fa-copyright");
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;
