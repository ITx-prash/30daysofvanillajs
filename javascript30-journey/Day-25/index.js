const divs = document.querySelectorAll("div");
function logText(e) {
  console.log(this.classList.value);
  e.stopPropagation();
}

// Capture phase listeners (run from outer -> inner before target phase)
divs.forEach((div) =>
  div.addEventListener("click", logText, { capture: true })
);

// Bubbling phase listeners with once:true so each element's bubbling handler fires only the first time it's clicked
divs.forEach((div) =>
  div.addEventListener("click", logText, { capture: false, once: true })
);

// Notes:
// 1. First click on inner .three will log: one (capture), two (capture), three (capture), three (target), three (bubble), two (bubble), one (bubble)
// 2. Subsequent clicks will ONLY show capture phase because bubbling listeners were added with once:true and have been removed.
// 3. Toggle the e.stopPropagation() line to observe how propagation halts.
