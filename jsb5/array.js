// string
// slice, split, convert ( + 1 number), so sang
// typeof: string
// tham chieu: function, array, object, date
// object : {key-value}
// object.key, object[key]
const address = "Hanoi";
const SGaddress = "SG";

const user = {
  name: "k18",
  age: 18,
  [address]: "Cau giay",
  children: [1, 2, 3, 4],
  parent: {
    dad: "dad",
  },
};

console.log("user.address", user.address);

// user.SG = "quan1";
// user[SGaddress] = "quan1";

// console.log(user.name);
// console.log("user.address", user.address);
// console.log('user["address"]', user["address"]);
// console.log("user.children[1]", user.children[1]);
// console.log("user.parent.dad", user.parent.dad);
// console.log("user[address]", user[address]);
// console.log("user.Hanoi", user.Hanoi);

// const now = new Date();
// console.log("now", now);
// const now1 = new Date("2023-01-02");
// console.log("now1", now1);
// const now2 = new Date(1);
// console.log("now2", now2);
