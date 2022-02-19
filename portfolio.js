var swiper = new Swiper(".mySwiper", {
    slidesPerView: 5,
    grid: {
      rows: 2,
    },
    breakpoints: {
        300: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        1100: {
            slidesPerView: 5,
            spaceBetween: 20,
        },
        1160: {
            slidesPerView: 5,
            spaceBetween: 30,
        },
    },
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  