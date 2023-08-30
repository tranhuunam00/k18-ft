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
