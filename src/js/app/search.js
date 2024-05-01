document.addEventListener("DOMContentLoaded", () => {
  initSearch();
  showMobileHiddenElementWithScroll();
});

const initSearch = () => {
  const search = document.querySelector("[data-search]");
  if (!search) return;

  const isMobile = matchMedia("(max-width: 767px)");

  const backdrop = document.querySelector("[data-backdrop]");
  const searchInput = search.querySelector("input");
  const searchButtonSearch = search.querySelector("[data-search-button='search']");
  const searchButtonCross = search.querySelector("[data-search-button='cross']");
  const searchClose = document.querySelector("[data-search-close]");
  const userCartButton = document.querySelector("[data-cart]");
  const userLangSwitcherButton = document.querySelector("[data-lang-switcher]");
  const userBurgerButton = document.querySelector("[data-burger]");
  const searchList = document.querySelector("[data-search-list]");
  const findedSearchItems = searchList.querySelectorAll(".article-search");
  const logo = document.querySelector("[data-logo]");

  searchInput.addEventListener("focus", () => {
    search.classList.add("active");
    backdrop.classList.add("active");
    searchButtonSearch.style.display = "none";
    searchButtonCross.style.display = "flex";
    searchClose.style.display = "flex";
    userCartButton.style.display = "none";
    userLangSwitcherButton.style.display = "none";
    userBurgerButton.setAttribute('style', 'display:none !important');
    searchList.style.display = "flex";
    if (isMobile.matches) {
      logo.style.display = "none";
    }
  });
  searchButtonCross.addEventListener("click", () => {
    searchInput.value = "";
  });
  searchClose.addEventListener("click", () => {
    search.classList.remove("active");
    backdrop.classList.remove("active");
    searchButtonSearch.style.display = "flex";
    searchButtonCross.style.display = "none";
    searchClose.style.display = "none";
    userCartButton.style.display = "flex";
    userLangSwitcherButton.style.display = "flex";
    userBurgerButton.style.display = "flex";
    searchList.style.display = "none";
    if (isMobile.matches) {
      logo.style.display = "block";
    }
  });

  searchList.addEventListener("scroll", () => {
    document.activeElement && document.activeElement.blur();
  });

  isMobile.addEventListener("change", (e) => {
    if (e.matches) {
      if (search.classList.contains("active")) {
        logo.style.display = "none";
      } else {
        logo.style.display = "block";
      }
    }
  });

  console.log(isMobile.matches);


  searchInput.addEventListener("input", () => {
    findedSearchItems.forEach(element => {
      const title = element.querySelector(".article-search__title");
      const text = element.querySelector(".article-search__text");
      searchInput.value = searchInput.value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      const pattern = new RegExp(`${searchInput.value}`, "gi");
      title.innerHTML = title.textContent.replace(pattern, match => `<mark>${match}</mark>`);
      text.innerHTML = text.textContent.replace(pattern, match => `<mark>${match}</mark>`);
    });
  });
};

const showMobileHiddenElementWithScroll = () => {
  const scrollElement = document.querySelector(".mobile-fixed-bottom");

  let lastScrollTop = 0;
  window.addEventListener("scroll", () => {
    document.activeElement && document.activeElement.blur();
    let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    if (currentScroll > lastScrollTop) {
      if (scrollElement.classList.contains("showScrollElement")) {
        scrollElement.classList.remove("showScrollElement");
      }
    } else {
      if (!scrollElement.classList.contains("showScrollElement")) {
        scrollElement.classList.add("showScrollElement");
      }
    }

    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
  });
};