document.addEventListener('DOMContentLoaded', function() {
const images = document.querySelectorAll('.slideImage');
const imageCounter = document.getElementById('imageCounter');
let currentIndex = 0;
let autoSlideInterval;

const updateDisplay = (index) => {
images.forEach((img, i) => {
    if (i === index) {
        img.classList.add('active');
        img.style.transform = 'translateX(0)';
    } else {
        img.classList.remove('active');
        img.style.transform = (i < index) ? 'translateX(-100%)' : 'translateX(100%)';
    }
});
imageCounter.textContent = `${index + 1}/3`;
};

const showNextImage = () => {
images[currentIndex].style.transform = 'translateX(-100%)';
images[currentIndex].style.opacity = '0';
currentIndex = (currentIndex + 1) % images.length;
images[currentIndex].style.transform = 'translateX(0)';
images[currentIndex].style.opacity = '1';
updateDisplay(currentIndex);
};

const showPreviousImage = () => {
images[currentIndex].style.transform = 'translateX(100%)';
images[currentIndex].style.opacity = '0';
currentIndex = (currentIndex - 1 + images.length) % images.length;
images[currentIndex].style.transform = 'translateX(0)';
images[currentIndex].style.opacity = '1';
updateDisplay(currentIndex);
};

document.getElementById('rightBTN').addEventListener('click', function() {
clearInterval(autoSlideInterval);
showNextImage();
startAutoSlide();
});

document.getElementById('leftBTN').addEventListener('click', function() {
clearInterval(autoSlideInterval);
showPreviousImage();
startAutoSlide();
});

const startAutoSlide = () => {
autoSlideInterval = setInterval(showNextImage, 3000);
};

// Initially show the first image and start auto-sliding
updateDisplay(currentIndex);
startAutoSlide();
});