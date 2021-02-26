
const slideShowImages = document.querySelectorAll("#slideshow .slides");

const nextImageDelay = 1000;

let currentImageCounter = 0;

slideShowImages[currentImageCounter].style.opacity = 1;

setInterval(nextImage, nextImageDelay);

function nextImage() {
    slideShowImages[currentImageCounter].style.opacity = 0;
    currentImageCounter = (currentImageCounter + 1) % slideShowImages.length;
    slideShowImages[currentImageCounter].style.opacity = 1;
}