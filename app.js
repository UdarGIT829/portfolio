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
                    break;
                }
                ;
            case (1):
                {
                    img.src = "imgs/proj2.png";
                    break;
                }
                ;
            case (2):
                {
                    img.src = "imgs/proj3.png";
                    break;
                }
                ;
            case (3):
                {
                    img.src = "imgs/proj4.png";
                    break;
                }
                ;
            default: {
                break;
            }
        }
        console.log(counter);
        counter++;
    });
}

// Get the modal
var modal = document.getElementById('myModal');
// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById('project1-img');
var modalImg = document.getElementById("img1");
var captionText = document.getElementById("caption");

img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    modalImg.alt = this.alt;
    captionText.innerHTML = this.alt;
}
// When the user clicks on <span> (x), close the modal
modal.onclick = function() {
    img1.className += " out";
    setTimeout(function() {
       modal.style.display = "none";
       img1.className = "modal-content";
     }, 400);
    
 }
//Same for other images
var img = document.getElementById('project2-img');
var modalImg = document.getElementById("img2");
img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    modalImg.alt = this.alt;
    captionText.innerHTML = this.alt;
}
// When the user clicks on <span> (x), close the modal
modal.onclick = function() {
    img2.className += " out";
    setTimeout(function() {
       modal.style.display = "none";
       img2.className = "modal-content";
     }, 400);
    
 }

 var img = document.getElementById('project3-img');
 var modalImg = document.getElementById("img3");
 img.onclick = function(){
     modal.style.display = "block";
     modalImg.src = this.src;
     modalImg.alt = this.alt;
     captionText.innerHTML = this.alt;
 }
 // When the user clicks on <span> (x), close the modal
 modal.onclick = function() {
     img3.className += " out";
     setTimeout(function() {
        modal.style.display = "none";
        img3.className = "modal-content";
      }, 400);
     
  } 
  
 var img = document.getElementById('project4-img');
 var modalImg = document.getElementById("img4");
 img.onclick = function(){
     modal.style.display = "block";
     modalImg.src = this.src;
     modalImg.alt = this.alt;
     captionText.innerHTML = this.alt;
 }
 // When the user clicks on <span> (x), close the modal
 modal.onclick = function() {
     img4.className += " out";
     setTimeout(function() {
        modal.style.display = "none";
        img4.className = "modal-content";
      }, 400);
     
  } 



  

navSlide();
initializeProjects();

