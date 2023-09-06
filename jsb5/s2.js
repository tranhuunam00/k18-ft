// const email = "nam@";
// // let check = false;
// // if (!email) {
// //   check = false;
// // } else {
// //   check = true;
// // }
// const check = !email ? false : true;

// console.log("check", check);

// const age = 18;

// const convertAge = (age) => {
//   switch (age) {
//     case 15:
//       console.log("dang 15 tuoi");
//       break;
//     case 16:
//       console.log("dang 16 tuoi");
//       break;
//     case 17:
//     case 18:
//     case 19:
//       console.log("dang lon hon 16 tuoi");
//       break;
//     default:
//       console.log("out");
//   }
// };
// convertAge(15);

// let number = 111;
// while (number < 15) {
//   console.log("number", number);
//   number++;
// }

// do {
//   console.log("number", number);
//   number++;
// } while (number < 15);

const user = {
  name: "k18",
  age: 18,
};
const numbers = [111, 21, 31, 14];

// for (let index in user) {
//   console.log("index", index);
//   console.log("value ", user[index]);
// }

// for (let index in numbers) {
//   console.log("index", index);
//   console.log("numbers[index]", numbers[index]);
// }

// hay tinh tong tuoi cua cac thanh vien trong mang sau
const users = [
  { name: "k16", age: 16 },
  { name: "k17", age: 17 },
  { name: "k18", age: 18 },
  { name: "k19", age: 19 },
  { name: "k12", age: 12 },
  { name: "k11", age: 11 },
];
for (let index of numbers) {
  console.log("index", index);
}
