//Getting the Elements
const player = document.querySelector(".player");
const video = player.querySelector(".viewer");
const progress = player.querySelector(".progress");
const progressBar = player.querySelector(".progress__filled");
const toggle = player.querySelector(".toggle");
const skipButtons = player.querySelectorAll("[data-skip]");
const ranges = player.querySelectorAll(".player__slider");
const fullscreen = player.querySelector(".fullscreen");
//Functions Definitions

function togglePlay() {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
}

function updateBtn() {
  const icon = this.paused ? "►" : "❚❚";
  // console.log(icon);

  toggle.textContent = icon;
}

function skip() {
  video.currentTime += parseInt(this.dataset.skip);
}

function handleRangeUpdate() {
  video[this.name] = this.value;
}

function handleProgress() {
  const percent = (video.currentTime / video.duration) * 100;
  progressBar.style.flexBasis = `${percent}%`;
}

function scrub(e) {
  console.log(e);
  const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
  console.log(e.offsetX);
  console.log(progress.offsetWidth);
  video.currentTime = scrubTime;
}

function makeFullScreen() {
  if (!document.fullscreenElement) {
    // If the document is not in full screen mode
    // make the entire player (with controls) full screen
    player.requestFullscreen();
  } else {
    // Otherwise exit the full screen
    document.exitFullscreen?.();
  }
}
// Hooking up the event listeners
video.addEventListener("click", togglePlay);
video.addEventListener("play", updateBtn);
video.addEventListener("pause", updateBtn);
video.addEventListener("timeupdate", handleProgress);
video.addEventListener("dblclick", makeFullScreen);

toggle.addEventListener("click", togglePlay);

skipButtons.forEach((btns) => {
  btns.addEventListener("click", skip);
});

let mousedown = false;

ranges.forEach((indiRange) => {
  // 'input' event fires LIVE while dragging the slider
  indiRange.addEventListener("input", handleRangeUpdate);
});

progress.addEventListener("click", scrub);
progress.addEventListener("mousemove", (e) => mousedown && scrub(e));
progress.addEventListener("mousedown", () => (mousedown = true));
progress.addEventListener("mouseup", () => (mousedown = false));
fullscreen.addEventListener("click", makeFullScreen);
