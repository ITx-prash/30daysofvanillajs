function debounce(func, wait = 20, immediate = true) {
  var timeout;
  return function () {
    var context = this,
      args = arguments;
    var later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

const sliderImages = document.querySelectorAll(".slide-in");

function checkSlide(e) {
  sliderImages.forEach((indiImage) => {
    //halfway through the image
    const slideInAt =
      window.scrollY + window.innerHeight - indiImage.height / 2;
    // console.log(slideInAt);

    //bottom through the image
    const imageBottom = indiImage.offsetTop + indiImage.height;
    const isHalfShown = slideInAt > indiImage.offsetTop;
    const isNotScrollPast = window.scrollY < imageBottom;
    isHalfShown && isNotScrollPast
      ? indiImage.classList.add("active")
      : indiImage.classList.remove("active");
  });
}

window.addEventListener("scroll", debounce(checkSlide));
