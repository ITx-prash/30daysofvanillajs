const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

if (!SpeechRecognition) {
  console.log("Speech recognition not supported 😞");
} else {
  const recognition = new SpeechRecognition();
  recognition.interimResults = true;

  let p = document.createElement("p");
  const words = document.querySelector(".words");
  words.appendChild(p);
  recognition.addEventListener("result", (e) => {
    // console.log(e.results);
    const transcript = Array.from(e.results)
      .map((result) => result[0])
      .map((result) => result.transcript)
      .join("");
    // console.log(transcript);
    p.textContent = transcript;
    if (e.results[0].isFinal) {
      p = document.createElement("p");
      words.appendChild(p);
    }
    if (transcript.includes("get the weather")) {
      console.log("Fetching the weather!!");
    }
  });
  recognition.addEventListener("end", () => recognition.start());
  recognition.start();
}
