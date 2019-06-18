// STICKY NAVBAR
// When the user scrolls the page, execute myFunction 
window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.querySelector("header");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset > sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}


// DROPDOWN MENU
let navToggle = document.querySelector('a.humburger');
let navBar = document.querySelectorAll('ul.topnav li.a');
navBar.forEach((li) => {
  li.classList.add("b");

  navToggle.addEventListener('click', () => {
    if (li.matches('.b')) {
      li.classList.remove("b");
    } else {
      li.classList.add("b");
    }
  });

});

// FRONT PAGE IMAGE SLIDER
let images = ['images/coverpage/asun.jpg',
  'images/coverpage/creamy-sandwich.jpg',
  'images/coverpage/pexels1.jpeg',
  'images/coverpage/shawarma.jpg',
  'images/coverpage/suya.jpg'
];

var count = 0;

setInterval(() => {
  if (count >= images.length) count = 0;

  let imgSrc = document.querySelector(".sliderimage");
  imgSrc.src = images[count];
  let text = document.querySelector("figure div.text");
  
  if(images[count] === images[0]) {
    text.innerHTML = "<strong>Asun</strong> - made from cow meat!" 
  };
  if(images[count] === images[1]) {
    text.innerHTML = "<strong>Creamy Sandwich</strong> - made from flour as the major ingredient!" 
  };
  if(images[count] === images[2]) {
    text.innerHTML = "<strong>Sausage</strong> - made from the best of flour!" 
  };
  if(images[count] === images[3]) {
    text.innerHTML = "<strong>Shawarma</strong> - made from cow meat and a host of other ingredients!" 
  };
  if(images[count] === images[4]) {
    text.innerHTML = "<strong>Suya</strong> - made from cow meat and seasonings!" 
  };

  count++;
  
}, 3300);


// Modal Login Form
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

