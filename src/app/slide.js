const debounce = (func, wait = 10, immediate = true) => {
  let timeout;
  return function() {
    let context = this,
      args = arguments;
    let later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    let callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
};

const checkSlide = () => {
  const elements = document.querySelectorAll('.slide');
  elements.forEach(element => {
    if (element.classList.contains('slide--active')) {
    } else {
      const slideInAt =
        window.scrollY + window.innerHeight - element.offsetHeight / 2;
    const elementBottom = element.offsetTop + element.offsetHeight;
      const isHalfShown = slideInAt > element.offsetTop;
      const isNotScrolledPast = window.scrollY < elementBottom;
      if (isHalfShown && isNotScrolledPast) {
        console.log('sliding')
        element.classList.add('slide--active');
      }
    }
  });
};
const slide = () => {
  window.addEventListener('scroll', debounce(checkSlide));
};
export default slide;
