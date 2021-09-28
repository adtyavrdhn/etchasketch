///////////////////////////
const grid = document.getElementById("grid");
const slider = document.getElementById("grid_range");
const sliderlabel = document.querySelector(".grid_label");
const colorpicker = document.querySelector(".color");
const btncolor = document.querySelector(".btncolor");
const btnrainbow = document.querySelector(".btnrainbow");
const btneraser = document.querySelector(".btneraser");
const btnclear = document.querySelector(".btnclear");
const colorContainer = document.querySelector(".color-picker");
const title = document.querySelector(".title");
////////////////////////
const DEFAULT_COLOR = `${colorpicker.value}`;
const DEFAULT_MODE = "color";
const DEFAULT_SIZE = 10;
///////////////////////
let currentColor = DEFAULT_COLOR;
let currentMode = DEFAULT_MODE;
let currentSize = DEFAULT_SIZE;
///////////////////////////////
const reset = function () {
  cleargrid();
  slider.value = DEFAULT_SIZE;
  sliderlabel.innerHTML = `${DEFAULT_SIZE} &times; ${DEFAULT_SIZE}`;
  setupgrid(DEFAULT_SIZE);
  currentSize = DEFAULT_SIZE;
  currentMode = DEFAULT_MODE;
  currentColor = DEFAULT_COLOR;
};
////
reset();
///////////
////
const randomint = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);
const randomColor = () =>
  `rgb(${randomint(0, 255)},${randomint(0, 255)},${randomint(0, 255)})`;
//////

const colormygrid = function (event) {
  if (currentMode == "color") {
    event.target.style.backgroundColor = `${colorpicker.value}`;
    colorContainer;
  } else if (currentMode === "erase") {
    event.target.style.backgroundColor = getComputedStyle(
      document.body
    ).getPropertyValue("--main-background");
  } else if (currentMode == "rainbow") {
    event.target.style.backgroundColor = `${randomColor()}`;
  }
};

function cleargrid() {
  grid.innerHTML = "";
}
////
function setCurrentMode(newmode) {
  currentMode = newmode;
  console.log(currentMode);
}
////
function setColor(newColor) {
  currentColor = newColor;
}
////
function setupgrid(size) {
  grid.style.gridTemplateColumns = `repeat(${size},1fr)`;
  grid.style.gridTemplateRows = `repeat(${size},1fr)`;

  for (let i = 0; i < size * size; i++) {
    const box = document.createElement("div");
    grid.appendChild(box);
  }
}
////////////////////////
btncolor.onclick = () => setCurrentMode("color");
btneraser.onclick = () => setCurrentMode("erase");
btnrainbow.onclick = () => setCurrentMode("rainbow");
btnclear.onclick = () => reset();
////////////////////////

// grid.addEventListener("mouseover", function (event) {
//   event.target.style.backgroundColor = "black";
// });

grid.addEventListener("mouseover", colormygrid);
/////////////////////////
slider.addEventListener("input", function () {
  sliderlabel.innerHTML = `${this.value} &times; ${this.value}`;
  cleargrid();
  setupgrid(this.value);
});

colorpicker.addEventListener("input", function () {
  title.style.color =
    colorContainer.style.backgroundColor = `${colorpicker.value}`;
});
/////////////////////
