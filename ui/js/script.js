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