 // for the keydown event
      document.addEventListener("keydown", (event) => {
        const pressedKey = event.key.toLowerCase();
        const validKeys = ["a", "s", "d", "f", "g", "h", "j", "k", "l"];

        if (validKeys.includes(pressedKey)) {
          audioPlayer(pressedKey);
          const element = document.querySelector(`.btn-${pressedKey}`);
          element.classList.add(
            // "bg-red-500",
            // Remove "text-4xl" to prevent layout shifts

            "scale-110",
            "border-yellow-500/90",
            "transition",
            "duration-[1ms]",
            "shadow-md",
            "shadow-yellow-500/50"
          );
        }
      });
      function audioPlayer(pressedKey) {
        const keySound = {
          a: "clap.wav",
          s: "hihat.wav",
          d: "kick.wav",
          f: "openhat.wav",
          g: "boom.wav",
          h: "ride.wav",
          j: "snare.wav",
          k: "tom.wav",
          l: "tink.wav",
        };

        const soundFile = keySound[pressedKey];
        if (soundFile) {
          const audio = new Audio(`./sounds/${soundFile}`);
          audio.currentTime = 0;
          audio.play();
        }
      }
      // -------------------------------------------------
      // for the keyup event
      document.addEventListener("keyup", (event) => {
        const pressedKey = event.key.toLowerCase();
        const validKeys = ["a", "s", "d", "f", "g", "h", "j", "k", "l"];

        if (validKeys.includes(pressedKey)) {
          const element = document.querySelector(`.btn-${pressedKey}`);
          element.classList.remove(
            // "bg-red-500",
            // Remove "text-4xl" here too

            "scale-110",
            "border-yellow-500/90",
            "duration-[1ms]",
            "shadow-md",
            "shadow-yellow-500/50"
          );
        }
      });