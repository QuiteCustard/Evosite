let swiper = new Swiper('.swiper', {
    grabCursor: true,
    centeredSlides: false,
    slidesPerView: 1,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
    },breakpoints: {

        1024: {
          slidesPerView: 2,
          spaceBetween: 50,
        },
        1700: {
          slidesPerView: 4,
        }
      },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },
});