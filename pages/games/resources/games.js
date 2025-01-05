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
document.addEventListener('DOMContentLoaded', () => {
    const themeToggleButton = document.createElement('button');
    themeToggleButton.textContent = 'Toggle Dark/Light Mode';
    themeToggleButton.classList.add('toggle-theme');
    document.body.appendChild(themeToggleButton);

    // Load the saved theme from localStorage, or default to 'light'
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    
    themeToggleButton.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme); // Save the theme to localStorage
    });

    // Set default theme to light
    //document.documentElement.setAttribute('data-theme', 'light');
});