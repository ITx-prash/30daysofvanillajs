let countDown;
const timerDisplay=document.querySelector(".display__time-left")
const endTime=document.querySelector(".display__end-time")

const buttons=document.querySelectorAll("[data-time]")

function timer(seconds) {
    //clear any existing timers
    clearInterval(countDown);
  const now = Date.now();
  
  const then = now + seconds * 1000;
  displayTimeLeft(seconds);

    displayEndTime(then);


  countDown = setInterval(() => {
    const secondsLeft = Math.round((then - Date.now()) / 1000);
    if (secondsLeft <= 0) {
      clearInterval(countDown);
      return;
    }
    // console.log(secondsLeft);
    displayTimeLeft(secondsLeft);
  }, 1000);
}

function displayTimeLeft(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainderSeconds = seconds % 60;
  console.log({ minutes, remainderSeconds });
  const display=`${minutes}:${remainderSeconds < 10 ? '0' : ''}${remainderSeconds}`;
  document.title=display;
  timerDisplay.textContent = display;
}


function displayEndTime(timestamp) {
  const end = new Date(timestamp);
  const hour = end.getHours();
  const minutes = end.getMinutes();
  const adjustedHour = hour > 12 ? hour - 12 : hour;
  console.log({ hour, minutes });
  endTime.textContent = `Be back at ${adjustedHour}:${minutes < 10 ? '0' : ''}${minutes}`;
}

buttons.forEach(button => button.addEventListener('click', function() {
  const seconds = parseInt(this.dataset.time);
  timer(seconds);
})); 

document.customForm.addEventListener('submit', function(e) {
  e.preventDefault();
  const mins = this.minutes.value;
//   console.log(mins);
  timer(mins * 60);
  this.reset();
})