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
         $(".header__top").addClass("header__top--animate");
      } else {
         $(".header__top").removeClass("header__top--animate");
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

   $(window).scroll(function () {
      if ($(document).scrollTop() > 100) {
         $(".go-back").addClass("animate");
      } else {
         $(".go-back").removeClass("animate");
      }
   });

   $('.go-back').on('click', function (e) {
      e.preventDefault();
      var id = $(this).attr('href'),
         top = $(id).offset().top;
      $('body,html').animate({
         scrollTop: top
      }, 1500);
   });

      var modalButton = $("[data-toggle=modal]");
      var closeModalButton = $(".modal__close");
      modalButton.on("click", openModal);
      closeModalButton.on("click", closeModal);

      function openModal() {
         var modalOverlay = $(".modal__overlay");
         var modalDialog = $(".modal__dialog");
         modalOverlay.addClass("modal__overlay--visible");
         modalDialog.addClass("modal__dialog--visible");
      }

      function closeModal() {
         event.preventDefault();
         var modalOverlay = $(".modal__overlay");
         var modalDialog = $(".modal__dialog");
         modalOverlay.removeClass("modal__overlay--visible");
         modalDialog.removeClass("modal__dialog--visible");
      }


      $(document).keydown(function (e) {
         if (e.keyCode == 27) {
            var modalOverlay = $(".modal__overlay");
            var modalDialog = $(".modal__dialog");
            modalOverlay.removeClass("modal__overlay--visible");
            modalDialog.removeClass("modal__dialog--visible");
         }
      });

      $(".control").each(function () {
         $(this).validate({
            errorClass: "invalid",
            messages: {
               name: {
                  required: "Пожалуйста введите Ваше имя",
                  minlength: "Имя должно состоять не менее чем из 2 символов",
               },
               email: {
                  required: "Пожалуйста введите Вашу почту",
                  email: "Ваш адрес почты должен быть в формате name@domain.com",
               },
            },
         });
      });

      $('.phone').mask('+7 (000) 000-00-00');

      AOS.init({
         disable: function () {
            let maxWidth = 1000;
            return window.innerWidth < maxWidth;
         },
      });
      var bLazy = new Blazy();
});