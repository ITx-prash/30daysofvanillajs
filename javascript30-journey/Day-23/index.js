const msg = new SpeechSynthesisUtterance();
let voices = [];
const voicesDropdown = document.querySelector('[name="voice"]');
const options = document.querySelectorAll('[type="range"], [name="text"]');
const speakButton = document.querySelector("#speak");
const stopButton = document.querySelector("#stop");

msg.text = document.querySelector('[name="text"]').value;

function populateVoices() {
  voices = this.getVoices();
  console.log(voices);

  voicesDropdown.innerHTML = voices
    .filter((voice) => voice.lang.includes("en"))
    .map(
      (voice) =>
        `<option value="${voice.name}">${voice.name} (${voice.lang})</option>`
    )
    .join("");
}

function setVoice() {
  //   console.log(this.value);
  msg.voice = voices.find((voice) => voice.name === this.value);
  toggle();
}
function toggle(startOver = true) {
  speechSynthesis.cancel();

  if (startOver) {
    speechSynthesis.speak(msg);
  }
}

voicesDropdown.addEventListener("change", setVoice);
if ("speechSynthesis" in window) {
  speechSynthesis.addEventListener("voiceschanged", populateVoices);
} else {
  console.log("Speech synthesis not supported 😞");
}

function setOption() {
  console.log(this.name, this.value);
  msg[this.name] = this.value;
  toggle();
}

options.forEach((option) => option.addEventListener("change", setOption));

speakButton.addEventListener("click", toggle);
stopButton.addEventListener("click", () => toggle(false));
