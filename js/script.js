
const registerForm = document.getElementById("registerForm");

if (registerForm) {
    registerForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const passwords = registerForm.querySelectorAll(
            'input[type="password"]'
        );

        if (passwords[0].value !== passwords[1].value) {
            alert("Passwords do not match!");
            return;
        }

        alert("Registration form submitted successfully!");

        registerForm.reset();
    });
}
