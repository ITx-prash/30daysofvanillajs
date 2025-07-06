const panelItems = document.querySelectorAll(".panel");
//above returns a node list which is kinda like array

const panelText = document.querySelector("#parent-panel"); 


panelItems.forEach((panel) => {
    panel.classList.add("inset-ring-3", "inset-ring-black/5");
  panel.addEventListener("click", () => {
    panel.classList.toggle("grow-4");
    panel.classList.toggle("text-red-500", "bg-green-700")
  });
});

