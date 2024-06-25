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

