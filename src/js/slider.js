import Swiper from "swiper";
import { Navigation } from "swiper/modules";

document.addEventListener("DOMContentLoaded", () => {
  initSlider();
});

const initSlider = () => {
  const sliders = document.querySelectorAll("[data-slider]");
  sliders.forEach((el) => {
    if (el.getAttribute("data-slider") === "default") {
      const swiper = new Swiper(el, {
        modules: [Navigation],
        slidesPerView: 1,
        spaceBetween: 24,
        watchSlidesProgress: true,
        navigation: {
          nextEl: el.querySelector('.slider-btn--next'),
          prevEl: el.querySelector('.slider-btn--prev'),
        },
        breakpoints: {
          768: {
            slidesPerView: 2,
          },
          960: {
            slidesPerView: 3,
          },
          1200: {
            slidesPerView: 3,
          },
        }
      })
    }
  });
};