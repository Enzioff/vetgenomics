import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";

document.addEventListener("DOMContentLoaded", () => {
  initSlider();
});

const initSlider = () => {
  const sliders = document.querySelectorAll("[data-slider]");
  sliders.forEach((el) => {
    const elementName = el.getAttribute("data-slider");
    switch (elementName) {
      case "default":
        initDefaultSlider(el);
        break;
      case "single":
        initSingleSlider(el);
        break;
      case "auto":
        initAutoSlider(el);
        break;
    }
  });
};

const initDefaultSlider = (el) => {
  const swiper = new Swiper(el, {
    modules: [Navigation],
    slidesPerView: 1,
    spaceBetween: 24,
    watchSlidesProgress: true,
    navigation: {
      nextEl: el.querySelector(".slider-btn--next"),
      prevEl: el.querySelector(".slider-btn--prev")
    },
    breakpoints: {
      768: {
        slidesPerView: 2
      },
      1024: {
        slidesPerView: 3
      }
    }
  });
};

const initAutoSlider = (el) => {
  const swiper = new Swiper(el, {
    modules: [Navigation],
    slidesPerView: "auto",
    spaceBetween: 0,
    watchSlidesProgress: true,
    navigation: {
      nextEl: el.querySelector(".slider-btn--next"),
      prevEl: el.querySelector(".slider-btn--prev")
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
        spaceBetween: 24,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 24,
      }
    }
  });
};

const initSingleSlider = (el) => {
  const swiper = new Swiper(el, {
    modules: [Pagination],
    slidesPerView: 1,
    spaceBetween: 0,
    pagination: {
      el: el.querySelector(".swiper-pagination")
    }
  });
};