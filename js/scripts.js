$(document).ready(function () {


    $('.carousel').carousel({
        interval: 2000,
    });

    $('.items').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3
      });

});