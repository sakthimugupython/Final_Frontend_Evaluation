document.addEventListener('DOMContentLoaded', function() {
    var carouselElement = document.querySelector('#carouselExample');
    var carousel = new bootstrap.Carousel(carouselElement, {
        interval: 3000,
        ride: 'carousel',
        pause: false
    });

    var carouselInner = carouselElement.querySelector('.carousel-inner');

    carouselInner.addEventListener('mouseenter', function() {
        carousel.pause();
    });

    carouselInner.addEventListener('mouseleave', function() {
        carousel.cycle();
    });
});
