let characters = [];
const key = "prash";
document.addEventListener("keydown", check);

function check(e) {
  characters.push(e.key);
  justLog();
  characters.join("") == key ? runCornify() : console.log("");
}

function runCornify() {
  console.log(`Found it! =>${key} \n ${characters}`);
  cornify_add();
}
function justLog() {
  characters.length < 6 ? console.log(characters) : spliceIt();
}

function spliceIt() {
  characters.splice(0, 1);

  console.log(characters);
}
