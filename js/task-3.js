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
