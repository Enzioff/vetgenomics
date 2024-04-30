export const toggleClasses = (
  selector,
  activeClass = "active",
  options = { toggle: false, active: false }
) => {
  if (options.toggle) {
    if (Array.isArray(selector)) {
      selector.forEach((item) => {
        item.classList.toggle(activeClass);
      });
    } else {
      selector.classList.toggle(activeClass);
    }
  } else if (options.active) {
    if (Array.isArray(selector)) {
      selector.forEach((item) => {
        if (item.classList.contains(activeClass)) {
          item.classList.remove(activeClass);
        } else {
          item.classList.add(activeClass);
        }
      });
    } else {
      if (selector.classList.contains(activeClass)) {
        selector.classList.remove(activeClass);
      } else {
        selector.classList.add(activeClass);
      }
    }
  } else {
    if (Array.isArray(selector)) {
      selector.forEach((item) => {
        item.classList.toggle(activeClass);
      });
    } else {
      selector.classList.toggle(activeClass);
    }
  }
};