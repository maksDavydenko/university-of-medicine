$(document).ready(function () {
    $('.header-slider').slick({
        infinite: true,
        adaptiveHeight: true,
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
        adaptiveHeight: true,
        variableWidth: true,
        variableHeight: true,
        prevArrow: "<button type='button' class='slick-prev slick-arrow'><img src='./img/icons/arrow_prev.svg' alt='prev'></button>",
        nextArrow: "<button type='button' class='slick-next slick-arrow'><img src='./img/icons/arrow_next.svg' alt='next'></i></button>"
    });


    $('.feedback-comments-slider').slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 2,
        dots: true,
        prevArrow: "<button type='button' class='slick-prev slick-arrow slick-arrow--dark'><img src='./img/icons/arrow_prev--light.svg' alt='prev'></button>",
        nextArrow: "<button type='button' class='slick-next slick-arrow slick-arrow--dark'><img src='./img/icons/arrow_next--light.svg' alt='next'></i></button>",


        responsive: [{
            breakpoint: 1100,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,

            }
        }]
    });
});



