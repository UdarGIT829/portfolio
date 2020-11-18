//Animation for navigation bar on mobile
var navSlide = function () {
    var burger = document.querySelector('.burger');
    var nav = document.querySelector('.nav-links');
    var navlinks = document.querySelectorAll('.nav-links li');
    //Toggle nav
    burger === null || burger === void 0 ? void 0 : burger.addEventListener('click', function () {
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
navSlide();
