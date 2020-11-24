"use strict";
//Animation for navigation bar on mobile
var navSlide = function () {
    var burger = document.querySelector('.burger');
    var nav = document.querySelector('.nav-links');
    var navlinks = document.querySelectorAll('.nav-links li');
    //Toggle nav
    burger.addEventListener('click', function () {
        nav.classList.toggle('nav-active');
        //Animate Links
        navlinks.forEach(function (link, index) {
            if (link.style.animation) {
                link.style.animation = '';
            }
            else {
                link.style.animation = "navLinkFade 0.5s ease forwards " + (index / 5) + "s";
            }
        });
        //Burger Animation
        burger.classList.toggle('toggle');
    });
};
function initializeProjects() {
    var counter = 0;
    var imgs = document.querySelectorAll(".project-img");
    imgs.forEach(function (img) {
        switch (counter) {
            case (0):
                {
                    img.src = "https://cdm.link/app/uploads/2010/12/mpkmini_angle_lg.png";
                }
                ;
            case (1):
                {
                    img.src = "https://cdm.link/app/uploads/2010/12/mpkmini_angle_lg.png";
                }
                ;
            case (2):
                {
                    img.src = "https://cdm.link/app/uploads/2010/12/mpkmini_angle_lg.png";
                }
                ;
        }
        counter++;
    });
    alert(imgs.length);
}
initializeProjects();
navSlide();
