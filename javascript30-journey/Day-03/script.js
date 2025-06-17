const imageContainer = document.querySelector("#imgContainer");
const space = document.querySelector("#space");
const blurInput = document.querySelector("#blur");
const color = document.querySelector("#color");
const jsText = document.querySelector("#jsText");
// for the padding space
space.addEventListener("input", (e) => {
  const value = e.target.value;
  imageContainer.style.padding = `${value}px`;
});

// for bluring
blurInput.addEventListener("input", (e) => {
  const value = e.target.value;
  imageContainer.style.filter = `blur(${value}px)`;
});

// for color
color.addEventListener("input", (e) => {
  const value = e.target.value;
  imageContainer.style.backgroundColor = value;
  jsText.style.color=value;
});
