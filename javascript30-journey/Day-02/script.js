const secHand = document.querySelector("#secHand");
const minHand = document.querySelector("#minHand");
const hourHand = document.querySelector("#hrHand");
setInterval(() => {
  const date = new Date();

  // Get all time components
  const seconds = date.getSeconds();
  const minutes = date.getMinutes();
  const hours = date.getHours();

  console.log(`${hours}:${minutes}:${seconds}`);

 
  const secondsDegrees = (seconds / 60) * 360 + 270; // +270 to start at 12 o'clock
  secHand.style.transform = `translateY(-50%) rotate(${secondsDegrees}deg)`;
  const minutesDegrees = (minutes / 60) * 360 + 270; 
  minHand.style.transform = `translateY(-50%) rotate(${minutesDegrees}deg)`;
  const hoursDegrees = ((hours % 12) / 12) * 360 + 270; 
  hourHand.style.transform = `translateY(-50%) rotate(${hoursDegrees}deg)`;

  // secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
}, 1000);
