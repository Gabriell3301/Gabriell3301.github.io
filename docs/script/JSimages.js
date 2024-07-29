let slideIndex = 1;
showSlide(slideIndex);

function moveSlide(n) {
    showSlide(slideIndex += n);
}

function currentSlide(n) {
    showSlide(slideIndex = n);
}

function showSlide(n) {
    let slides = document.querySelectorAll('.slides img');
    let thumbnails = document.querySelectorAll('.thumbnails img');

    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }

    slides.forEach((slide, index) => {
        slide.style.display = 'none';
    });

    thumbnails.forEach((thumbnail) => {
        thumbnail.classList.remove('active');
    });

    slides[slideIndex - 1].style.display = 'block';
    thumbnails[slideIndex - 1].classList.add('active');
}