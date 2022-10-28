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