const array = [12, 23, 64, 42, 76, 45, 78, 34, 12, 36];

for (let i = 0; i < array.length; i++) {
  console.log(Math.max(...array));
  console.log(Math.min(...array));
  console.log("=", (i = array.length));
  console.log("", i > array.length);
  console.log("", i <= array.length);
  return;
}

// let max = array[0]; // 64
// for (let i = 0; i < array.length; i++) {
//   if (max < array[i]) {
//     max = array[i];
//   }
// }

// max;

// let maxArray = Math.max(...array);
// maxArray;
