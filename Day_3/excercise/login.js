const name = document.getElementById("name");
const p = document.getElementById("username");
const password = document.getElementById("password");
const button = document.getElementById("login");
const div = document.getElementById("hidden");
const usernameDisplay = document.getElementById("usernameDisplay");
const passwordDisplay = document.getElementById("passwordDisplay");
const show = document.getElementById("show");

function hidden() {
  div.style.display = "none";
  usernameDisplay.innerHTML = `Username: ${name.value}`;
  passwordDisplay.innerHTML = `Password: ${password.value}`;
}

function check() {
  // Dùng ternary operator ? :
  //   if (this.checked) {
  //     password.type = "text";
  //   } else {
  //     password.type = "password";
  //   }

  this.checked ? (password.type = "text") : (password.type = "password");
}

button.addEventListener("click", hidden);
button.addEventListener("click", login);
button.addEventListener("click", password);
show.addEventListener("change", check);
