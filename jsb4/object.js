var key = "sex";
const person = {
  name: "John",
  age: 18,
  address: {
    street: "123 Main St",
    city: "Anytown",
    state: "CA",
  },
  [key]: "male",
  getName: function () {
    return this.name;
  },
  class: "k19",
};
// khai baso
//

if (change) {
  person.class = "k19";
}
console.log(person.age);
console.log(person["age"]);
console.log(person.address["state"]);

console.log("person", person);

person.email = "k18@gmail.com";
person.age = 80;

console.log("person last", person);
