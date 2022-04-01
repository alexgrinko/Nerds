const slideButtonOne = document.querySelector('.button-slide-one');
const slideButtonTwo = document.querySelector('.button-slide-two');
const slideButtonThree = document.querySelector('.button-slide-three');
const slideOne = document.querySelector('.slide-one');
const slideTwo = document.querySelector('.slide-two');
const slideThree = document.querySelector('.slide-three');


slideButtonTwo.addEventListener('click', function(evt) {
    evt.preventDefault();
    slideButtonTwo.classList.add('current');
    slideButtonOne.classList.remove('current');
    slideButtonThree.classList.remove('current');
    slideTwo.classList.remove('slide-none');
    slideOne.classList.add('slide-none');
    slideThree.classList.add('slide-none');
});

slideButtonThree.addEventListener('click', function(evt) {
    evt.preventDefault();
    slideButtonThree.classList.add('current');
    slideButtonOne.classList.remove('current');
    slideButtonTwo.classList.remove('current');
    slideThree.classList.remove('slide-none');
    slideOne.classList.add('slide-none');
    slideTwo.classList.add('slide-none');

});

slideButtonOne.addEventListener('click', function(evt) {
    evt.preventDefault();
    slideButtonOne.classList.add('current');
    slideButtonTwo.classList.remove('current');
    slideButtonThree.classList.remove('current');
    slideOne.classList.remove('slide-none');
    slideTwo.classList.add('slide-none');
    slideThree.classList.add('slide-none');
});