// cách lấy thẻ h1 có id là title
// const h1 = document.getElementById("title");
const title = document.getElementsByClassName("title");

const div = document.getElementById("color");

div.style.color = "red";
div.style.fontSize = "30px";
div.style.fontWeight = "bold";

// Tạo 1 thẻ div có id bất kỳ
// Dùng javascript set css cho nó như sau:
// color: red, font-size là 30, font-weight là bold.

function clickme() {
  console.log("Hello");
}

div.addEventListener("click", clickme);

// mouseenter

// mouseEnter  => div thay đổi màu thành đỏ

function mouseEnter() {
  div.style.color = "red";
}
function mouseOut() {
  div.style.color = "blue";
}

div.addEventListener("mouseenter", mouseEnter);
div.addEventListener("mouseout", mouseOut);
