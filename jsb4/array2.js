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
