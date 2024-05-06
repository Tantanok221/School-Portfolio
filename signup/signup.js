var checkbox = document.querySelector("#checkbox")
console.log(checkbox)
checkbox.addEventListener("change", () => {
  var passwordInput = document.getElementById("password");
  
  if (checkbox.checked) {
      passwordInput.type = "text";
  } else {
      passwordInput.type = "password";
  }
})

function togglePasswordVisibility() {
}