// var: let const
// block : {}
// nguyên thủy : number, string, boolean, null, undefined
// != == <=  >=  && ||
// falsy
// typeof instanceOf

const email = "1214234";
if (!email) {
  console.log("chưa có email");
} else {
  console.log(email.length);
}

console.log("phủ định của 0", !0);
console.log("phủ định của unde", !undefined);
console.log("phủ định của null", !null);
console.log("phủ định của false", !false);
console.log("phủ định của chuỗi rỗng", !"");
console.log("phủ định của chuỗi rỗng", !NaN);

console.log("phủ định của mảng có phần tử", ![1]);
console.log("phủ định của mảng 0 phần tử", ![]);
console.log("phủ định của chuỗi", !"hehhe");
console.log("phủ định của object rỗng", !{});

if (!"dieukiendung") {
  console.log("đúng");
  console.log("pass");
} else {
  console.log("sai");
}

console.log("type chuỗi", typeof "chuỗi");
const email1 = "23423";
console.log(typeof null == "object");

console.log("so sánh");
const value1 = 1;
const value2 = "1";
console.log(1 == "1" && typeof value1 == typeof value2);
console.log(1 === "1");
// Cách đặt biến
// camelKey
// snake_key  : CLASS_DOMAIN :"1234@gmail.com"
console.log("run ");
// Hàm

console.log("Hàm init");
function sum(a, b) {
  return a + b;
}
const newFunction = sum;
// 3 - undefined - error
const newFunction2 = sum(1, 1);
// 2
function subtract(a, b) {
  const c = a - b;
  return 9;
}
const function3 = subtract;
console.log("f3");
console.log(function3);
console.log(function3(1, 3));
console.log(function3(11, 3));

// -2 error

let functionName = function (parameters) {
  // code to be executed
};

const arrorFun = (a, b) => {
  console.log("biến", a, b);
  if (!a) {
    //
    console.log("có vào if 1");
    a = 1;
  }
  if (!b) {
    console.log("có vào if 2");
    b = 2;
  }
  return a + b;
};
console.log("arrorFun", arrorFun(5, "hehe")); //7
console.log("arrorFun", arrorFun({}, "hehe")); //7
console.log("arrorFun", arrorFun([], "hehe")); //7
console.log("arrorFun", arrorFun(true, 5)); //6

// Nan
