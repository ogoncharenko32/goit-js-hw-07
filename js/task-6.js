function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(amount) {
  const boxes = document.querySelector("#boxes");
  let startWidth = 30;
  let startHeight = 30;
  
  
  for (let i = 1; i <= amount; i++) {
    const newBox = document.createElement("div");

    newBox.style.width = startWidth + "px";
    newBox.style.height = startHeight + "px"; 
    newBox.style.backgroundColor = getRandomHexColor();
    newBox.classList.add('box');

    boxes.append(newBox);

    startWidth += 10;
    startHeight += 10;
  }
  const form = document.querySelector("input");
  form.value = "";
  number = 0;
}

function destroyBoxes(event) {
  const boxes = document.querySelectorAll(".box");
  
  for (let i of boxes) {
    i.remove();
    console.log("cleared");
  }
  const form = document.querySelector("input");
  form.value = "";
}

function create(event) {
  destroyBoxes();
  createBoxes(number);
}

const createButton = document.querySelector('button[data-action="create"]');
const destrButton = document.querySelector('button[data-action="destroy"]');

const amount = document.querySelector("input");
let number = 0;

amount.addEventListener("change", (event) => {
  const num = event.currentTarget.value;
  if (num > 0 && num <= 100) {
      number = num;
  }
});

createButton.addEventListener("click", create);
destrButton.addEventListener("click", destroyBoxes);

const controls = document.querySelector("#controls");
controls.style.fontFamily = "Montserrat, sans-serif";
controls.style.borderRadius = "8px";
controls.style.padding = "32px";
controls.style.width = "486px";
controls.style.height = "104px";
controls.style.background = "#f6f6fe";
controls.style.marginLeft = "auto";
controls.style.marginRight = "auto";
controls.style.padding = "32px";
controls.style.display = "flex";
controls.style.justifyContent = "space-between";

const controlsInput = document.querySelector("#controls input");
controlsInput.style.fontFamily = "inherit";
controlsInput.style.border = "1px solid #808080";
controlsInput.style.borderRadius = "8px";
controlsInput.style.padding = "8px";
controlsInput.style.width = "150px";
controlsInput.style.height = "40px";
controlsInput.style.backgroundColor = "transparent";
controlsInput.style.fontWeight = "400";
controlsInput.style.fontSize = "16px";
controlsInput.style.lineHeight = "150%";
controlsInput.style.letterSpacing = "0.04em";
controlsInput.style.color = "#2e2f42";
controlsInput.style.textAlign = "center";
controlsInput.onmouseover = function () {
    this.style.border='1px solid #000';
}
controlsInput.onmouseout = function () {
    this.style.border='1px solid #808080';
}
controlsInput.onfocus = function () {
    this.style.border='1px solid #808080';
    this.style.outline='none';
}

createButton.style.borderRadius = "8px";
createButton.style.fontFamily = "inherit";
createButton.style.border = "none";
createButton.style.padding = "8px 16px";
createButton.style.width = "120px";
createButton.style.height = "40px";
createButton.style.background = "#4e75ff";
createButton.style.fontWeight = "500";
createButton.style.fontSize = "16px";
createButton.style.lineHeight = "150%";
createButton.style.letterSpacing = "0.04em";
createButton.style.color = "#fff";
createButton.style.marginLeft = "32px";
createButton.style.cursor = "pointer";
createButton.onmouseover = function () {
  this.style.background="#6c8cff";
}
createButton.onmouseout = function () {
  this.style.background="#4e75ff";
}

destrButton.style.borderRadius = "8px";
destrButton.style.fontFamily = "inherit";
destrButton.style.border = "none";
destrButton.style.padding = "8px 16px";
destrButton.style.width = "120px";
destrButton.style.height = "40px";
destrButton.style.background = "#ff4e4e";
destrButton.style.fontWeight = "500";
destrButton.style.fontSize = "16px";
destrButton.style.lineHeight = "150%";
destrButton.style.letterSpacing = "0.04em";
destrButton.style.color = "#fff";
destrButton.style.marginLeft = "32px";
destrButton.style.cursor = "pointer";
destrButton.onmouseover = function () {
  this.style.background="#ff7070";
}
destrButton.onmouseout = function () {
  this.style.background="#ff4e4e";
}

const boxes = document.querySelector("#boxes");
boxes.style.display = "flex";
boxes.style.flexBasis = "content";
boxes.style.minWidth = "486px";
boxes.style.marginTop = "16px";
boxes.style.marginLeft = "auto";
boxes.style.marginRight = "auto";
boxes.style.backgroundColor = "#f6f6fe";
boxes.style.padding = "32px 28px";
boxes.style.flexWrap = "wrap";
boxes.style.rowGap = "16px";
boxes.style.columnGap = "44px";

const b = document.querySelector("body");
b.style.display = "flex";
b.style.flexDirection = "column"

