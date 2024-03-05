// const number = "+";

// switch (number) {
//   case "+":
//     number1 + number2;
//     break;
//   case 5:
//     console.log("number = 5");
//     break;
//   default:
//     console.log("Nothing");
// }

let result;
const number1 = 5;
const number2 = 10;

const operator = "+";

if (operator === "+") {
  result = number1 + number2;
} else if (operator === "-") {
  result = number1 - number2;
} else if (operator === "*") {
  result = number1 * number2;
} else if (operator === "/") {
  result = number2 / number1;
} else {
  console.log("Error");
}

result;
