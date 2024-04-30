import { toggleClasses } from "../helpers/toggleClasses";
import { removeClasses } from "../helpers/removeClasses";

document.addEventListener("DOMContentLoaded", () => {
  initMobileMenu();
});

const initMobileMenu = () => {
  const burger = document.querySelector("[data-burger]");
  const backdrop = document.querySelector("[data-backdrop]");
  const navigation = document.querySelector("[data-nav]");
  const scrollElement = document.querySelector(".mobile-fixed-bottom");
  const isMobile = window.matchMedia("(min-width: 1280px)");

  if (burger || backdrop || navigation) {
    burger.addEventListener("click", () => {
      toggleClasses([burger, backdrop, navigation]);
      burger.classList.contains("active")
        ? scrollElement.classList.add("showScrollElement")
        : scrollElement.classList.remove("showScrollElement");
    });

    isMobile.addEventListener("change", (evt) => {
      console.log(evt.matches)
      if (evt.matches) {
        removeClasses([burger, backdrop, navigation, scrollElement])
      }
    });
  }
};