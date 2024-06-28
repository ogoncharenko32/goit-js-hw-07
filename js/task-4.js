const submitForm = document.querySelector('.login-form')

submitForm.addEventListener("submit", handleLogin);

function handleLogin(event) {
    event.preventDefault();
    const form = event.target;
    const email = form.elements.email.value;  
    const pswd = form.elements.password.value;
    
    if (email === "" || pswd === "") {
        alert("All form fields must be filled in");
    };

    const creds = {
        email: email.trim(),
        password: pswd.trim(),
    }
    console.log(creds)
    form.reset();
} 

const formInput = document.querySelectorAll(".login-form input");

for (const i of formInput) {
    i.style.border = "1px solid #808080";
    i.style.borderRadius = "4px";
    i.style.width = "360px";
    i.style.height = "40px";
    i.style.marginTop = "8px";
    i.style.paddingTop = "8px";
    i.style.paddingBottom = "8px";
    i.style.paddingLeft = "16px";
    i.style.fontWeight = "400";
    i.style.fontSize = "16px";
    i.style.lineHeight= "150%";
    i.style.letterSpacing = "0.04em";
    i.style.color = "#2e2f42";
    i.onmouseover = function () {
        this.style.border='1px solid #000';
    }
    i.onmouseout = function () {
        this.style.border='1px solid #808080';
    }
    i.onfocus = function () {
        this.style.border='1px solid #808080';
        this.style.outline='none';
    }
}

submitForm.style.display = "flex";
submitForm.style.flexDirection = "column";
submitForm.style.gap = "8px";
submitForm.style.alignItems = "center";
submitForm.style.borderRadius = "8px";
submitForm.style.padding = "24px";
submitForm.style.width = "408px";
submitForm.style.height = "256px";
submitForm.style.marginLeft = "auto";
submitForm.style.marginRight = "auto";

const btn = document.querySelector(".login-form button");
btn.style.borderRadius = "8px";
btn.style.border = "none";
btn.style.padding = "8px 16px";
btn.style.width = "86px";
btn.style.height = "40px";
btn.style.background = "#4e75ff";
btn.style.fontWeight = "500";
btn.style.fontSize = "16px";
btn.style.lineHeight = "150%";
btn.style.letterSpacing = "0.04em";
btn.style.color = "#fff";
btn.style.fontFamily = "Montserrat, sans-serif";
btn.style.marginRight = "auto";
btn.style.marginTop = "16px";
btn.style.cursor = "pointer";
btn.onmouseover = function () {
    this.style.background="#6c8cff";
}
btn.onmouseout = function () {
    this.style.background="#4e75ff";
}

