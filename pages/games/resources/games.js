 let currentSlide = 0;

    function showSlide(index, totalSlides) {
    const slider = document.querySelector('.slider');
    if (index >= totalSlides) {
    currentSlide = 0;
} else if (index < 0) {
    currentSlide = totalSlides - 1;
} else {
    currentSlide = index;
}
    slider.style.transform = `translateX(-${currentSlide * 100}%)`;
}

    document.addEventListener('DOMContentLoaded', () => {
    const totalSlides = document.querySelectorAll('.slider img').length;
    document.querySelector('.prev').addEventListener('click', () => showSlide(currentSlide - 1, totalSlides));
    document.querySelector('.next').addEventListener('click', () => showSlide(currentSlide + 1, totalSlides));
});