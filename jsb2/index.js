myString = "hellow";
// var slice1 = myString.slice(1); // Kết quả: "world!"
// console.log(myString);
// console.log("slice1 ", slice1);

// var slice2 = myString.slice(2, 4); // Kết quả: "world!"
// console.log(myString);
// console.log("slice2 ", slice2);

// const sliceCustom = (string, end, start) => {};

// console.log(sliceCustom(myString, 2, 4));
// console.warn("\x1b[33mmhehe");

// console.log("chay", myString.slice());

// for (let i = 0; i < myString.length; i++) {
//   console.log("vong ", i);
//   console.log("giá trị ", myString[i]);
// }
const sliceCustom = (initString, start, end) => {
  if (!start || typeof start !== "number") {
    start = 0;
  }
  if (!end || typeof end !== "number") {
    end = initString.length;
  }
  let responseString = "";
  for (let i = start; i < end; i++) {
    responseString = responseString + initString[i];
  }
  return responseString;
};

console.log(sliceCustom(myString, 1, 3));
console.log(myString.slice(1, 3));

console.log("th2");

console.log(sliceCustom(myString, 1));
console.log(myString.slice(1));

console.log("th3");

console.log(sliceCustom(myString));
console.log(myString.slice());
