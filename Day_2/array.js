// Array là kiểu dữ liệu data type giống như: String, number, boolean
//           0  1  2  3  4 index
const arr = [1, 2, 3, 4, 5];
// Thêm vào cuối hàng
arr.push(6);

// Xóa 1 phần tử cuối hàng
arr.pop();

let result;

// Tìm index
result = arr.indexOf(3);

// Cắt từ index 1 tới index 3 mà không chứa index 3 (1 -> 3)
result = arr.slice(1, 4);

result = arr[4];

result;
