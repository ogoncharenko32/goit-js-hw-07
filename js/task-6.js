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
}

function destroyBoxes(event) {
  const boxes = document.querySelectorAll(".box");
  
  for (let i of boxes) {
    i.remove();
    console.log("cleared");
  }
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
