const container = document.getElementById("container");
const registerBtn = document.getElementById("register");
const loginBtn = document.getElementById("login");
const eyeContainer = document.querySelector("#togglePassword");
console.log(eyeContainer);
registerBtn.addEventListener("click", () => {
  container.classList.add("active");
});

loginBtn.addEventListener("click", () => {
  container.classList.remove("active");
});

eyeContainer.addEventListener("click", () => {
  var passwordInput = document.querySelector("#id_password");
  console.log(passwordInput)

  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    eyeContainer.className = "fa-solid fa-eye-slash";
  } else {
    passwordInput.type = "password";
    eyeContainer.className = "fa-solid fa-eye";
  }
});
