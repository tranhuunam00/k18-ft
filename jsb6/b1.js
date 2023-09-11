const obj1 = {
  name: "k18",
  age: 18,
};
const arr1 = [11, 12, 3, 4];
// tham chieu: object .function. array

// for (let index in obj1) {
//   console.log('index', index)
// }

// for (let index of arr1) {
//   console.log("of------------");
//   console.log('index', index)
// }

const newUsers = arr1.map((value, index) => {
  return { ["age"]: value, name: "ten " + value };
});

const newArr = arr1.filter((value, index) => {
  return value % 2 == 0;
});

const item = arr1.find((value, index) => value % 2 === 0);

const users = [
  { id: 1, age: 17 },
  { id: 2, age: 18 },
  { id: 3, age: 19 },
  { id: 4, age: 20 },
];

const check = users.every((value, index) => {
  return value.age > 15;
});

const checkSome = users.some((value, index) => {
  return value.age > 21;
});

const check2 = (users, ageCheck) => {
  for (let value of users) {
    if (value.age <= ageCheck) {
      return false;
    }
  }
  return true;
};
console.log("check ", check);
console.log("check2", check2(users, 15));
console.log("checkSome", checkSome);
