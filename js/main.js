$(function () {

    $('.burger').on('click', function () {
       $('.burger').toggleClass('burger--active');
       $('.menu').toggleClass('menu--active');
       $('body').toggleClass('lock');

    });

    $('.menu__link').on('click', function () {
       $('.burger').removeClass('burger--active');
       $('.menu').removeClass('menu--active');
       $('body').removeClass('lock');

    });

    $(window).scroll(function () {
       if ($(document).scrollTop() > 100) {
          $(".header__nav").addClass("header__nav--animate");
       } else {
          $(".header__nav").removeClass("header__nav--animate");
       }
    });

   var mixer = mixitup('.portfolio__board');

});