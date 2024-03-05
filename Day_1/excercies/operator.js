function myFunction() {
  const number = document.getElementById("Input").value;
  const number1 = 5;
  const number2 = 10;

  switch (number) {
    case "+":
      text = number1 + number2;
      break;

    case "-":
      text = number2 - number1;
      break;

    case "*":
      text = number1 * number2;
      break;

    case "/":
      text = number2 / number1;
      break;
    default:
      console.log("Nothing");
  }
  document.getElementById("result").innerHTML = text;
}
