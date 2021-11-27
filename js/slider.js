$(document).ready(function () {
    $('.header-slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: "<button type='button' class='slick-prev slick-arrow'><img src='./img/icons/arrow_prev.svg' alt='prev'></button>",
        nextArrow: "<button type='button' class='slick-next slick-arrow'><img src='./img/icons/arrow_next.svg' alt='next'></i></button>"
    });

    $('.gallery-slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        prevArrow: "<button type='button' class='slick-prev slick-arrow'><img src='./img/icons/arrow_prev.svg' alt='prev'></button>",
        nextArrow: "<button type='button' class='slick-next slick-arrow'><img src='./img/icons/arrow_next.svg' alt='next'></i></button>"
    });
});



