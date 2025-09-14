const timeNode = [...document.querySelectorAll("[data-time]")];

const seconds = timeNode
  .map((indiNode) => indiNode.dataset.time)
  .map((timeSec) => {
    const [min, sec] = timeSec.split(":").map(parseFloat);
    return min * 60 + sec;
  })
  .reduce((total, vidSec) => total + vidSec);

let secondsLeft = seconds;
const hours = Math.floor(secondsLeft / 3600);
secondsLeft = secondsLeft % 3600;

const minutes = Math.floor(secondsLeft / 60);
secondsLeft = secondsLeft % 60;

console.log(`Total time: ${hours}:${minutes}:${Math.floor(secondsLeft)}`);
console.log(`Total seconds: ${seconds}`);
