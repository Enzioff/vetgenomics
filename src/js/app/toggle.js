document.addEventListener("DOMContentLoaded", () => {
  initToggle();
});

const initToggle = () => {
  const toggleEls = document.querySelectorAll("[data-toggle]");
  toggleEls.forEach(element => {
    const innerElement = element.querySelector("[data-toggle-inner]");
    element.addEventListener("click", function() {
      this.classList.toggle("active");
    });
    innerElement.addEventListener("click", (evt) => {
      evt.stopPropagation();
    });
  });
};