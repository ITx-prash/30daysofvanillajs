const hero = document.querySelector(".hero");
const text = hero.querySelector("h1");
const walk = 900; //100px
function shadow(e) {
  //   const height = hero.offsetHeight;
  //   const width = hero.offsetWidth;

  // what is offsetHeight and width?
  // offsetHeight: The height of the element, including padding and border, but not margin.
  // offsetWidth: The width of the element, including padding and border, but not margin.
  //   Shortcut

  const { offsetHeight: height, offsetWidth: width } = hero;

  let { offsetX: x, offsetY: y } = e;
  //   console.log(x,y);

  if (this !== e.target) {
    x = x + e.target.offsetLeft;
    y = y + e.target.offsetTop;
  }
  const xWalk = Math.round((x / width) * walk - walk / 2);
  const yWalk = Math.round((y / height) * walk - walk / 2);
  console.log(xWalk, yWalk);
text.style.textShadow = `
    ${xWalk}px ${yWalk}px 0 rgba(255,0,255,0.7),
    ${xWalk * -1}px ${yWalk}px 0 rgba(0,0,255,0.7),
    ${yWalk}px ${xWalk}px 0 rgba(0,255,0,0.7),
    ${yWalk * -1}px ${xWalk}px 0 rgba(0,255,255,0.7),
    ${xWalk * 0.5}px ${yWalk * 0.5}px 0 rgba(255,255,0,0.6),
    ${xWalk * -0.5}px ${yWalk * -0.5}px 0 rgba(255,0,0,0.6),
    ${xWalk * 1.5}px ${yWalk * 1.5}px 0 rgba(255,255,255,0.5),
    ${xWalk * -1.5}px ${yWalk * -1.5}px 0 rgba(0,0,0,0.8)
`;
}

hero.addEventListener("mousemove", shadow);
