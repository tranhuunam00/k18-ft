Array.prototype.forEach2 = function (callback) {
  console.log("this", this); // this la tk cham dem .forEach
  for (let i = 0; i < this.length; i++) {
    callback(this[i], i); // (value) => { console.log("value", value); }
  }
};
const numbers = [1, 2, 3, 4, 5];

// numbers.forEach2((value, index) => {
//   console.log("value", value);
//   console.log("index", index);
// });
// numbers.forEach((value) => {
//   console.log("value forEach", value);
// });

const users = [
  { name: "k16", age: 118 },
  { name: "k17", age: 17 },
  { name: "k18", age: 18 },
  { name: "k19", age: 19 },
  { name: "k12", age: 12 },
  { name: "k11", age: 18 },
];
let user18 = null;
for (let value of users) {
  if (value.age === 18) {
    console.log("dda bang", value);
    user18 = value;
    break;
  }
}
const user182 = users.find((value, index) => {
  return value.age === 18;
});

console.log("user18", user18);
console.log("user182", user182);
