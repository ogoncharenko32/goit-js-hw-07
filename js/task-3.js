const nameInput = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');

nameInput.addEventListener("input", (event) => {
    const text = event.currentTarget.value;
    if (text.trim() == 0) {
        nameOutput.textContent = "Anonymous";
    } else {
        nameOutput.textContent = text.trim();
    }
});


const input = document.querySelector('#name-input');
input.style.border = "1px solid #808080";
input.style.borderRadius = "4px";
input.style.width = "360px";
input.style.height = "40px";
input.style.fontFamily = "inherit";
input.style.fontWeight = "400";
input.style.fontSize = "16px";
input.style.lineHeight= "150%";
input.style.letterSpacing = "0.04em";
input.style.color = "#2e2f42";
input.style.paddingTop = "8px";
input.style.paddingBottom = "8px";
input.style.paddingLeft = "16px";
input.onmouseover = function () {
    this.style.border='1px solid #000';
}
input.onmouseout = function () {
    this.style.border='1px solid #808080';
}
input.onfocus = function () {
    this.style.border='1px solid #808080';
    this.style.outline='none';
}


const text = document.querySelector("h1");
text.style.fontWeight = "600";
text.style.fontSize = "24px";
text.style.lineHeight = "133%";
text.style.letterSpacing = "0.04em";
text.style.color = "#2e2f42";
text.style.marginTop = "16px";