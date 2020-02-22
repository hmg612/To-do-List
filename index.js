/*
const title = document.querySelector("#title");
const BASE_COLOR = "rgb(52, 73, 94)";
const ANOTHER_COLOR = "#7f8c8d";

function handleClick() {
  const currentColor = title.style.color;
  if (currentColor === BASE_COLOR) {
    title.style.color = ANOTHER_COLOR;
  } else {
    title.style.color = BASE_COLOR;
  }
}

function init() {
  title.style.color = BASE_COLOR;
  title.addEventListener("click", handleClick);
}

init();

function handleOffline() {
  console.log("lalalala");
}

function handleOnline() {
  console.log("Welcome!!");
}

window.addEventListener("offline", handleOffline);
window.addEventListener("online", handleOnline);
*/

const title = document.querySelector("#title");
const CLICKED_CLASS = "clicked";

function handleClick() {
  title.classList.toggle(CLICKED_CLASS);
  /*
  const currentClass = title.className;
  
  if (currentClass !== CLICKED_CLASS) {
    title.classList.add(CLICKED_CLASS);
  } else {
    title.classList.remove(CLICKED_CLASS);
  }
  */
  /*
  const hasClass = title.classList.contains(CLICKED_CLASS);

  if (hasClass) {
    title.classList.remove(CLICKED_CLASS);
  } else {
    title.classList.add(CLICKED_CLASS);
  }
  */
}

function init() {
  title.addEventListener("click", handleClick);
}
init();
