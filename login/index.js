const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});

// function togglePasswordVisibility() {
//     var passwordInput = document.getElementById("password");
//     var togglePasswordButton = document.getElementById("togglePassword");

//     if (passwordInput.type === "password") {
//         passwordInput.type = "text";
//         togglePasswordButton.className = "fa-solid fa-eye-slash";
//     } else {
//         passwordInput.type = "password";
//         togglePasswordButton.className = "fa-solid fa-eye";
//     }
// }