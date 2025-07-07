const panelItems = document.querySelectorAll(".panel");
//above returns a node list which is kinda like array

// console.log(panelText);

panelItems.forEach((panel) => {
  panel.classList.add("inset-ring-3", "inset-ring-black/5");

  panel.addEventListener("click", () => {
    panel.classList.toggle("grow-4");

    // Get only the center text of THIS clicked panel (not all panels)
    const centerText = panel.querySelector("div:nth-child(2)");
    const firstText = panel.querySelector("div:nth-child(1)");
    const thirdText = panel.querySelector("div:nth-child(3)");

    //upper and lower text
    firstText.classList.toggle("-translate-y-full");
    // firstText.classList.toggle("font-bold");
    thirdText.classList.toggle("translate-y-full");
    //  firstText.classList.toggle("mt-26");
    // Remove the original smaller text size and add the larger one
    if (centerText.classList.contains("text-[90px]")) {
      centerText.classList.remove("text-[90px]");
      centerText.classList.add("text-[160px]");
    } else {
      centerText.classList.remove("text-[160px]");
      centerText.classList.add("text-[90px]");
    }
  });
});
