// biến nguyên thủy
// biến tham chiếu  : array
const array = [1, 2, 4];
const joinString = array.join("---");
console.log("joinString", joinString);

const joinCustom = (array, spaceText) => {
  if (!spaceText) spaceText = ",";
  let res = "";
  for (let i = 0; i < array.length; i++) {
    if (i === array.length - 1) {
      res = res + array[i];
    } else {
      res = res + array[i] + spaceText;
    }
  }
  return res;
};
const joinString2 = joinCustom(array, "---");
console.log("joinString2", joinString2);
console.log("textJoin2 ", array.join());
console.log("textJoin2 ", joinCustom(array));

// tim tong
const sum = (array) => {
  let total = 0;
  for (let i = 0; i < array.length; i++) {
    total += array[i];
  }
  return total;
};

// co [1,2,4,6,7] :
const filter = (array, number) => {
  let res = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] > number) res.push(array[i]);
  }
  return res;
};

//
//push. join
// reverse
console.log([1, 2, 3, 5].reverse());
//b1 . tach chuoi thanh 1 mang cac ki tu
// b2 .dao nguoc mang
// join lai

const reverse1 = (text) => {
  let res = "";
  for (let i = text.length - 1; i >= 0; i--) {
    res += text[i];
  }
  return res;
};

console.log("revert1", reverse1("huhuuuu"));
console.log("object".split("").reverse().join(""));
