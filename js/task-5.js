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

const widget = document.querySelector(".widget");
widget.style.width = "345px";
widget.style.height = "280px";
widget.style.marginLeft = "auto";
widget.style.marginRight = "auto";
widget.style.fontWeight = "400";
widget.style.fontSize = "16px";
widget.style.lineHeight = "150%";
widget.style.letterSpacing = "0.04em";
widget.style.color = "#2e2f42";
widget.style.display = "flex";
widget.style.flexDirection = "column";
widget.style.alignItems = "center";

const btn = document.querySelector(".widget button");
btn.style.borderRadius = "8px";
btn.style.border = "none";
btn.style.width = "148px";
btn.style.height = "40px";
btn.style.background = "#4e75ff";
btn.style.fontWeight = "500";
btn.style.fontSize = "16px";
btn.style.lineHeight = "150%";
btn.style.letterSpacing = "0.04em";
btn.style.color = "#fff";
btn.style.fontFamily = "Montserrat, sans-serif";
btn.style.marginTop = "16px";
btn.style.cursor = "pointer";
btn.onmouseover = function () {
  this.style.background="#6c8cff";
}
btn.onmouseout = function () {
  this.style.background="#4e75ff";
}