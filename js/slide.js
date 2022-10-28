const buttonSlides = document.querySelectorAll('.button-slide');
const slides = document.querySelectorAll('.slide-all');
let count = 0;

setInterval(function() {
    buttonSlides[count].classList.remove('current');
    slides[count].classList.remove('slide-show');
    if (count === 2) {
        count = 0;
    } else {
        count = count + 1;
    }
    buttonSlides[count].classList.add('current');
    slides[count].classList.add('slide-show');
}, 5000);

for (let i = 0; i < buttonSlides.length; i++) {
    buttonSlides[0].classList.add("current");
    slides[0].classList.add('slide-show');

    buttonSlides[i].addEventListener("click", function(event) {
        for (let j = 0; j < buttonSlides.length; j++) {
            buttonSlides[j].classList.remove("current");
        };
        buttonSlides[i].classList.add("current");

        for (let a = 0; a < slides.length; a++) {
            slides[a].classList.remove('slide-show');
        }
        count = i;
        slides[count].classList.add('slide-show');
    });
}





// const slideButtonOne = document.querySelector('.button-slide-one');
// const slideButtonTwo = document.querySelector('.button-slide-two');
// const slideButtonThree = document.querySelector('.button-slide-three');
// const slideOne = document.querySelector('.slide-one');
// const slideTwo = document.querySelector('.slide-two');
// const slideThree = document.querySelector('.slide-three');


// slideButtonTwo.addEventListener('click', function(evt) {
//     evt.preventDefault();
//     slideButtonTwo.classList.add('current');
//     slideButtonOne.classList.remove('current');
//     slideButtonThree.classList.remove('current');
//     slideTwo.classList.remove('slide-none');
//     slideOne.classList.add('slide-none');
//     slideThree.classList.add('slide-none');
// });

// slideButtonThree.addEventListener('click', function(evt) {
//     evt.preventDefault();
//     slideButtonThree.classList.add('current');
//     slideButtonOne.classList.remove('current');
//     slideButtonTwo.classList.remove('current');
//     slideThree.classList.remove('slide-none');
//     slideOne.classList.add('slide-none');
//     slideTwo.classList.add('slide-none');

// });

// slideButtonOne.addEventListener('click', function(evt) {
//     evt.preventDefault();
//     slideButtonOne.classList.add('current');
//     slideButtonTwo.classList.remove('current');
//     slideButtonThree.classList.remove('current');
//     slideOne.classList.remove('slide-none');
//     slideTwo.classList.add('slide-none');
//     slideThree.classList.add('slide-none');
// });


// setInterval(function() {
//     slideButtonTwo.classList.add('current');
//     slideButtonOne.classList.remove('current');
//     slideButtonThree.classList.remove('current');
//     slideTwo.classList.remove('slide-none');
//     slideOne.classList.add('slide-none');
//     slideThree.classList.add('slide-none');
// }, 4000);

// setInterval(function() {
//     slideButtonThree.classList.add('current');
//     slideButtonOne.classList.remove('current');
//     slideButtonTwo.classList.remove('current');
//     slideThree.classList.remove('slide-none');
//     slideOne.classList.add('slide-none');
//     slideTwo.classList.add('slide-none');
// }, 8000);

// setInterval(function() {
//     slideButtonOne.classList.add('current');
//     slideButtonTwo.classList.remove('current');
//     slideButtonThree.classList.remove('current');
//     slideOne.classList.remove('slide-none');
//     slideTwo.classList.add('slide-none');
//     slideThree.classList.add('slide-none');
// }, 12000);