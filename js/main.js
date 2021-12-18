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


   $(".card__btn").on("click", function () {
      $(this).toggleClass("card__btn--active");
   });

   //  $('.card__btn').hover(
   //     function () {
   //        $(this).addClass('card__btn--active');
   //     },
   //     function () {
   //        $(this).removeClass('card__btn--active');
   //     }
   //  );

   $(window).scroll(function () {
      if ($(document).scrollTop() > 100) {
         $(".header__nav").addClass("header__nav--animate");
      } else {
         $(".header__nav").removeClass("header__nav--animate");
      }
   });

   var swiperCategory = new Swiper('.category__swiper', {
      loop: true,
      slidesPerView: 4,
      spaceBetween: 26,

      navigation: {
         nextEl: '.category__button--next',
         prevEl: '.category__button--prev',
      },

   });
   var swiperCategory = new Swiper('.unreleased__swiper', {
      loop: true,
      slidesPerView: 5,
      spaceBetween: 25,

      navigation: {
         nextEl: '.unreleased__button--next',
         prevEl: '.unreleased__button--prev',
      },

   });
});