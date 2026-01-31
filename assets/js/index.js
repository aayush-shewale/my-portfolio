/*!
=========================================================
* Meyawo Landing page
=========================================================

* Copyright: 2019 DevCRUD (https://devcrud.com)
* Licensed: (https://devcrud.com/licenses)
* Coded by www.devcrud.com

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// smooth scroll
$(document).ready(function(){
    $(".navbar .nav-link").on('click', function(event) {

        if (this.hash !== "") {

            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 700, function(){
                window.location.hash = hash;
            });
        } 
    });
});

// navbar toggle
$('#nav-toggle').click(function(){
    $(this).toggleClass('is-active')
    $('ul.nav').toggleClass('show');
});

window.addEventListener("load", function () {
  document.querySelector(".header-content").classList.add("show");
});
window.addEventListener("scroll", function () {
  document.querySelector(".about-img").classList.add("show");
});
window.addEventListener("scroll", function () {
  document.querySelector(".about-caption").classList.add("show");
});


const line1Text = "FRONT-END WEB DEVELOPER";
const line2Text = "& ASPIRING FULLSTACK DEVELOPER";

const line1 = document.getElementById("line1");
const line2 = document.getElementById("line2");

let i = 0;
let j = 0;
// new
function typeLine1() {
  line1.style.visibility = "visible";
  line1.classList.add("typing");

  if (i < line1Text.length) {
    line1.textContent += line1Text.charAt(i);
    i++;
    setTimeout(typeLine1, 60);
  } else {
    line1.classList.remove("typing");
    setTimeout(typeLine2, 300); // delay before second line
  }
}

function typeLine2() {
  line2.style.visibility = "visible";
  line2.classList.add("typing");

  if (j < line2Text.length) {
    line2.textContent += line2Text.charAt(j);
    j++;
    setTimeout(typeLine2, 50);
  } else {
    line2.classList.remove("typing");
  }
}

window.addEventListener("load", () => {
  line1.textContent = "";
  line2.textContent = "";
  typeLine1();
});
document.getElementById("dis").addEventListener("click", function () {
  alert("Disabled by Aayush!");
});








