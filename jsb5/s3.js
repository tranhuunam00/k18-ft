// // callback:  1 function nhung duoc truyen vao 1 ham khac nhu 1 tham so

// const sum = (a, b) => {
//   return a + b;
// };

// const check = (a, b, sum) => {
//   if (sum(a + b) > 19) return false;
//   return true;
// };
// console.log(check(1, 2, sum));

const users = [
  { name: "k16", age: 118 },
  { name: "k17", age: 17 },
  { name: "k18", age: 18 },
  { name: "k19", age: 29 },
  { name: "k12", age: 12 },
  { name: "k11", age: 11 },
];

const newFilterUsers = users.filter((value) => value.age < 20);
console.log("newFilterUsers", newFilterUsers);
const numbers = [11, 12, 13, 15, 16];
// const newNumbers = numbers.map((value) => value * 2);
// console.log("newNumbers", newNumbers);
// console.log("numbers", numbers);

const newMapUser = users.map((user, index, array) => {
  const newData = { name: user.name, age: user.age };

  // newData.address = "hanoi";
  newData["address"] = "hanoi";

  return newData;
});
// console.log("newMapUser", newMapUser);
// console.log("users", users);

// users.forEach((value, index, array) => {
//   console.log("value", value);
//   console.log("index", index);
//   // console.log("array", array);
// });

// const newUser = numbers.map((value, index) => {
//   console.log("value", value);
//   console.log("index", index);
//   return value * 2;
// });

// console.log("newUser", newUser);

// const newFilterNumbers = numbers.filter((value, index) => {
//   return value % 2 == 0;
// });
// console.log("newFilterNumbers ", newFilterNumbers);

// dung map de them key address cho moi user trong mang users co gia tri "hanoi"
// dung filter loc ra nhung user trong manng users co age <20
