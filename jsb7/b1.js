//
// primitive: number , string , boolean, undefined, null
// reference : object : {}, function, array

// let var const
// block { }
// dịa chỉ mới : khi tạo ra object mới
const a = "1 chuỗi";
let obj = {}; // obj = oX99  : {}
let obj2 = obj; // obj2 = Ox99
obj = {}; // Ox100 obj = OX100
obj.name = "k18";
obj2.age = 19;

console.log("obj", obj); //
console.log("obj2", obj2); // {} {obj1}

// nếu là biến nguyên thủy thì giá trị của nó bằng luôn giá trị của biến :
const b = 7;
const arr = [1, 2, 3]; // arr =0Xxx còn nội dung của 0Xxx = [1, 2, 3]

const users = [
  { id: 1, age: 12 },
  { id: 2, age: 22 },
  { id: 3, age: 32 },
]; //0X99

// 0x100

// in key : 0,1,2,3
// of
// for (let index in users) {
//   const newItem = { i d: users[index].id, age: users[index].age };
//   users2.push(newItem);
// }

const users2 = users.map((value, index) => {
  return value;
});

// map map():

users.push({
  id: 4,
  age: 42,
});

users[0].age = 90;

console.log("users", users);
console.log("users2", users2);

const users3 = [
  { id: 1, age: 12 },
  { id: 2, age: 22 },
  { id: 3, age: 32 },
];
const total = users3.reduce((prev, curr, index) => {
  // vòng 1 giá trị prev = giá trị khởi đầu
  // giá trị prev vòng sau = giá trị return vòng trước
  console.log("vòng ", index);
  console.log("prev", prev);
  console.log("curr", curr);

  return (
    prev +
    " user" +
    (index + 1) +
    " có id là " +
    curr.id +
    " và tuổi là " +
    curr.age
  );
}, "");

// user 1 có id là 1 và tuổi là 12, user 2 có id là 2 và tuổi là 14, user 3 có id là 3 và tuổi là 34
console.log("total", total);
console.log({} + "text");
console.log(true + "text");
console.log(1 + "text");
console.log("text" + 2 + 1);
