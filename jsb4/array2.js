const array = [1, 2, 4, 5];
const lastElement = array[array.length - 1];
console.log("array", array);
const lastElement2 = array.pop();
console.log("array", array);
const firstElement = array.shift();
console.log("array", array);
const unshift = array.unshift(10, 2, 3, 14);
console.log("array", array);

console.log("lastElement", lastElement);
console.log("lastElement2", lastElement2);
console.log("firstElement", firstElement);
console.log("unshift", unshift);
// b1. vofng for b2 unshift b2 join
const reverse3 = (text) => {
  console.log("start------");
  const array = [];
  for (let index = 0; index < text.length; index++) {
    array.unshift(text[index]);
    console.log("vofng ", index);
    console.log(array);
  }
  return array.join("");
};
console.log(reverse3("hello"));

console.log("--------------------object----------------");

function abc() {
  return 1;
}
const user = {
  name: "Zk18",
  age: 18,
  getName: function () {
    console.log("this", this);
    return this.age;
  },
  test: abc,
};
console.log(user["name"]);
console.log(user.name);
console.log(user.getName());
console.log(user.test());

var key = "sex";
const person = {
  name: "John",
  age: 30,
  address: {
    street: "123 Main St",
    city: "Anytown",
    state: "CA",
  },
  [key]: "male",
  getName: function () {
    return this.name;
  },
};
console.log("dia chir");
console.log(person.address.city);

const a = "name";
const age = "20";

const object = {
  key: "hehe",
  [a]: "kkk",
  name: "john",
  ["age"]: 19,
  age: 21,
};
console.log("keets quar 2", object.name);
console.log("keets quar age", object.age);
