const bands = [
  "The Plot in You",
  "The Devil Wears Prada",
  "Pierce the Veil",
  "Norma Jean",
  "The Bled",
  "Say Anything",
  "The Midway State",
  "We Came as Romans",
  "Counterparts",
  "Oh, Sleeper",
  "A Skylit Drive",
  "Anywhere But Here",
  "An Old Dog",
];

//Get the ul id
const list=document.querySelector("#bands")


console.table(bands);
function strip(bandName) {
  const regx = /^(a |an |the )/i;
  return bandName.replace(regx, "").trim() ;
}
const sortedBands = bands.sort((a, b) => {
  if (strip(a) < strip(b)) {
    return -1;
  } else {
    return 1;
  }
});
console.table(sortedBands);

for (const items of sortedBands) {
  // list.append(items)
  const indiItem = document.createElement("li");
  indiItem.textContent = items;
  indiItem.classList.add("m-2","border-2","p-2");
  list.appendChild(indiItem);
}
