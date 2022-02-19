var swiper = new Swiper(".mySwiper", {
  slidesPerView: 8,
  grid: {
    rows: 2,
  },
  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 320px
    300: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    775: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
    // when window width is >= 480px
    1100: {
      slidesPerView: 5,
      spaceBetween: 20,
    },
    // when window width is >= 640px
    1160: {
      slidesPerView: 5,
      spaceBetween: 30,
    },
  },
  spaceBetween: 20,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
