const addItems = document.querySelector(".add-items");
const itemsList = document.querySelector(".plates");
const items = JSON.parse(localStorage.getItem("Items")) || [];
const remove = document.querySelector(".delete");
const check = document.querySelector(".check");
const uncheck = document.querySelector(".uncheck");

function addItem(e) {
  e.preventDefault();
  const text = this.querySelector("[name=item]").value;

  const item = {
    text, //same as text=text; ES6+
    done: false,
  };
  items.push(item);
  populateList(items, itemsList);
  localStorage.setItem("Items", JSON.stringify(items));
  // localStorage.getItem('Items')
  this.reset();
}

function populateList(items = [], itemsList) {
  itemsList.innerHTML = items
    .map((indiItem, i) => {
      return `
      <li class="border-b border-gray-200 py-2  flex items-start transition-all duration-600 ">
        <input type='checkbox' data-index=${i} id='item${i}' ${
          indiItem.done ? "checked" : ""
        } class="hidden checkbox-input">
        <label for="item${i}" class="flex-1 cursor-pointer font-light transition-all duration-200 hover:text-blue-600 checkbox-label ${
          indiItem.done ? 'line-through opacity-60' : ''
        }">${indiItem.text}</label>
      </li> `;
    })
    .join("");
}

function toggleDone(e) {
  if (!e.target.matches("input")) return; //skip unless it is an input
  const el = e.target;
  const index = el.dataset.index;
  // console.log(index);

  items[index].done = !items[index].done;
  localStorage.setItem("Items", JSON.stringify(items));
  populateList(items, itemsList);
}

function deleteall(e) {
  items.length = 0; // Clear the items array
  localStorage.removeItem("Items");
  populateList(items, itemsList); // Update the UI immediately
}
populateList(items, itemsList);

function checker() {
  const data = items.forEach((indiItem) => {
    indiItem.done = true;
  });
  localStorage.setItem("Items", JSON.stringify(items));
  populateList(items, itemsList);
}

function unchecker(e) {
  const data = items.forEach((indiItem) => {
    indiItem.done = false;
  });
  localStorage.setItem("Items", JSON.stringify(items));
  populateList(items, itemsList);
}
populateList(items, itemsList);

addItems.addEventListener("submit", addItem);

itemsList.addEventListener("click", toggleDone);

remove.addEventListener("click", deleteall);
check.addEventListener("click", checker);
uncheck.addEventListener("click", unchecker);
