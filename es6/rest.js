const user = { id: 1, name: "k18", posts: [1, 2, 3], password: "pw" }

const user3 = { ...user, posts: [...user.posts] }

const array = [1, 2, 3, 4, 5]
const [one, two, three, four, five] = array
const [o1, o2, ...rest2] = array
console.log("ppppp");
console.log(o1,o2,rest2);
const { password, ...rest } = user
console.log(password);
console.log('rest', rest)
// console.log(one,two);



// user3.name = "k20"
// user3.posts[1] = 7

// console.log(user);
// console.log(user3);

// // const id = user["id"]
// // const name = user["name"]
// // const posts = user["posts"]

// const { id, name, posts } = user
// console.log(id,name);


// // tham chiếu : 1 địa chỉ : ngôi nhà

console.log("--------");

const name = 'John';
const age = 30;

function myTag(strings, nameValue, ageValue) {
  console.log(strings); // Output: ["My name is ", " and I'm ", ""]
  console.log(nameValue); // Output: John
  console.log(ageValue); // Output: 30
}

myTag`My name is ${name} and I'm ${age}.`;
