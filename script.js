
var slideIndex = 0;
showSlides();
var slides, diamonds;

function showSlides() {
    var i;
    slides = document.getElementsByClassName("mySlides");
    diamonds = document.getElementsByClassName("diamond");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    for (i = 0; i < diamonds.length; i++) {
        diamonds[i].className = diamonds[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    diamonds[slideIndex - 1].className += " active";
    setTimeout(showSlides, 8000); 
}

function plusSlides(position) {
    slideIndex += position;
    if (slideIndex > slides.length) { slideIndex = 1 }
    else if (slideIndex < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < diamonds.length; i++) {
        diamonds[i].className = diamonds[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    diamonds[slideIndex - 1].className += " active";
}

function currentSlide(index) {
    if (index > slides.length) { index = 1 }
    else if (index < 1) { index = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < diamonds.length; i++) {
        diamonds[i].className = diamonds[i].className.replace(" active", "");
    }
    slides[index - 1].style.display = "block";
    diamonds[index - 1].className += " active";
}

