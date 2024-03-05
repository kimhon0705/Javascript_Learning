// Object cũng là 1 kiểu dữ liệu

const person = {
  name: "Hon",
  age: 23,
  address: "HCM",
  habits: ["gym", "games", "code"],
  email: "hon@gmail.com",
};

let result;

// Truy cập thuộc tính email
result = person.email;

// Thêm thuộc tính isStudy
person.isStudy = true;
person;

// Xóa thuộc tính name
delete person.name;
person;
