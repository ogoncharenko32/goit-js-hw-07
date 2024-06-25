function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const button = document.querySelector('.change-color');

button.addEventListener("click", changeColor);

function changeColor(event) {
  const span = document.querySelector('.color');

  span.textContent = getRandomHexColor();

  const body = document.querySelector('body');

  body.style.backgroundColor = span.textContent;
}  