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
];

const users2 = users;
users.push({ id: 4, age: 42 });

console.log("users", users); // ra 4 phần tử
console.log("users2", users2); // ra 3 phần tử

users[0].id = 100;
console.log("---------------------");
console.log("users", users); // ra 4 phần tử
console.log("users2", users2); // ra 3 phần tử
