export const removeClasses = (
  selector,
  activeClass = "active"
) => {
  if (Array.isArray(selector)) {
    selector.forEach(el => {
      el.classList.remove(activeClass);
    });
  } else {
    selector.classList.remove(activeClass);
  }
};