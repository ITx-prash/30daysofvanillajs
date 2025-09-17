const video = document.querySelector(".player");
const videoHolder = document.querySelector("#videoHolder");
const canvas = document.querySelector(".photo");
const ctx = canvas.getContext("2d");
const strip = document.querySelector(".strip");
const snap = document.querySelector(".snap");
const takePic = document.querySelector("#takePhoto");
const controls = document.querySelector(".rgb");
videoHolder.addEventListener("click", getVideo);
function getVideo() {
  //using the default browser api for getting the webcam access
  navigator.mediaDevices
    .getUserMedia({ video: true, audio: false })
    .then((localMediaStream) => {
      //   console.log(localMediaStream);
      //   Make all these things visible
      videoHolder.classList.add("hidden");
      controls.classList.remove("hidden");
      canvas.classList.remove("hidden");
      takePic.classList.remove("hidden");
      video.classList.remove("hidden");

      //sourcing the webcam as source to the video
      video.srcObject = localMediaStream;
      video.play();
    })
    .catch((error) => {
      console.error("Error accessing the camera", error);
    });
}
getVideo();

function paintToCanvas() {
  const width = video.clientWidth;
  const height = video.clientHeight;

  canvas.height = height;
  canvas.width = width;

  return setInterval(() => {
    ctx.drawImage(video, 0, 0, width, height);

    //pixel itself is an array of millions of pixels with rgb colour value: taking the pixels out
    let pixels = ctx.getImageData(0, 0, width, height);
    //Alter the pixels
    // pixels = redEffect(pixels);
    // pixels = rgbSplit(pixels);
    pixels = greenScreen(pixels);
    // ctx.globalAlpha = 0.1;
    // put the pixels back
    ctx.putImageData(pixels, 0, 0);
  }, 16);
}

function takePhoto() {
  //for playing the sound
  snap.currentTime = 0;
  snap.play();

  //take the data out of the canvas
  const data = canvas.toDataURL("image/jpeg");
  console.log(data);
  const link = document.createElement("a");
  link.href = data;
  link.setAttribute("download", `photo-${Date.now()}`);

  // Add Tailwind classes for nice styling
  link.className = "block hover:scale-105 transition-transform duration-200";
  link.innerHTML = `<img src="${data}" alt="Captured Photo" class="w-48 h-36 object-cover rounded-lg shadow-lg border-2 border-white hover:border-blue-400 transition-colors -scale-x-100" />`;

  // Add to the END of strip (so new photos appear at the bottom)
  strip.appendChild(link);
}
video.addEventListener("canplay", paintToCanvas);

function redEffect(pixels) {
  for (let i = 0; i < pixels.data.length; i += 4) {
    pixels.data[i + 0] = pixels.data[i + 0] + 100; //red
    pixels.data[i + 1] = pixels.data[i + 1] + 100; //green
    pixels.data[i + 2] = pixels.data[i + 2] * 0.4; //blue
  }
  return pixels;
}

function rgbSplit(pixels) {
  for (let i = 0; i < pixels.data.length; i += 4) {
    pixels.data[i - 150] = pixels.data[i + 0]; //red
    pixels.data[i + 100] = pixels.data[i + 1]; //green
    pixels.data[i - 150] = pixels.data[i + 2]; //blue
  }
  return pixels;
}
function greenScreen(pixels) {
  const levels = {};

  document.querySelectorAll(".rgb input").forEach((input) => {
    levels[input.name] = input.value;
  });

  for (i = 0; i < pixels.data.length; i = i + 4) {
    red = pixels.data[i + 0];
    green = pixels.data[i + 1];
    blue = pixels.data[i + 2];
    alpha = pixels.data[i + 3];

    if (
      red >= levels.rmin &&
      green >= levels.gmin &&
      blue >= levels.bmin &&
      red <= levels.rmax &&
      green <= levels.gmax &&
      blue <= levels.bmax
    ) {
      // take it out!
      pixels.data[i + 3] = 0;
    }
  }

  return pixels;
}
