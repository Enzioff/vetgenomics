document.addEventListener("DOMContentLoaded", () => {
  const submenu = document.querySelector("[data-page-navigation]");
  if (submenu) {
    initSubmenu(submenu);
  }

  setActiveMenuItem()
  window.addEventListener('scroll', setActiveMenuItem);
});

const initSubmenu = (submenu) => {
  const links = submenu.querySelectorAll("a");
  const slider = submenu.querySelector("[data-slider]");
  const circles = document.querySelectorAll(".circle");

  let angle = 0;
  let angleDegrees = 20;
  let previousElementIndex = 0;

  if (!links) return;

  links.forEach((link, idx, arr) => {
    link.addEventListener("click", () => {
      arr.forEach(temp => temp.parentElement.classList.remove("active"));
      link.parentElement.classList.add("active");

      previousElementIndex > idx ? angleDegrees = -Math.abs(angleDegrees) : angleDegrees = Math.abs(angleDegrees);

      if (previousElementIndex !== idx) {
        angle += angleDegrees;
        circles.forEach((circle, idx) => {
          if (idx % 2 === 0) {
            circle.style.transform = `rotate(${-angle}deg)`;
          } else {
            circle.style.transform = `rotate(${angle}deg)`;
          }
        });
      }

      previousElementIndex = idx;
    });
  });
};

const menuItems = document.querySelectorAll('.page-navigation__link');

function setActiveMenuItem() {
  let fromTop = window.scrollY;
  const slider = document.querySelector("[data-slider]");
  const introSection = document.querySelector('.section--full');

  if (!menuItems) return;
  menuItems.forEach(item => {
    const section = document.querySelector(item.hash);

    if (!section) return;
    if (
      section.offsetTop <= fromTop + 160 &&
      section.offsetTop + section.offsetHeight > fromTop + 160
    ) {
      item.parentElement.classList.add('active');
      slider.style.height = item.offsetHeight + "px";
      slider.style.top = item.offsetTop + "px";
    } else {
      item.parentElement.classList.remove('active');
    }

    if (introSection && fromTop < introSection.innerHeight) {
      slider.style.height = 0;
      slider.style.top = 0;
    }
  });
}