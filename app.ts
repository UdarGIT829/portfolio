//Animation for navigation bar on mobile
const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navlinks = document.querySelectorAll<HTMLElement>('.nav-links li');

    //Toggle nav
    burger.addEventListener('click',() => {
        nav.classList.toggle('nav-active');

        //Animate Links
        navlinks.forEach((link, index) => {
            if(link.style.animation){
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${(index / 5)}s`;
            }
        })

        //Burger Animation
        burger.classList.toggle('toggle');
    });


}

navSlide();