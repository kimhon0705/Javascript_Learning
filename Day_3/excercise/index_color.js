const div = document.getElementById("color");
const button = document.getElementsByClassName("btn");
const submitBtn = document.getElementById("submit");
const name = document.getElementById("name");

div.style.fontSize = "50px";

function red() {
  div.style.display = "block";
  div.style.color = "red";
}
function blue() {
  div.style.display = "block";
  div.style.color = "blue";
}

function yellow() {
  div.style.display = "block";
  div.style.color = "yellow";
}

function hidden() {
  div.style.display = "none";
}

button[0].addEventListener("click", red);
button[1].addEventListener("click", blue);
button[2].addEventListener("click", yellow);
button[3].addEventListener("click", hidden);

// console.log("Hello")
function submit() {
  div.innerHTML = name.value;
}

submitBtn.addEventListener("click", submit);
