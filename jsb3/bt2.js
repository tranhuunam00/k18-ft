// Tạo một biến chứa một đoạn văn bản dài.
// Đếm số từ trong đoạn văn bản.
// Tách đoạn văn bản thành mảng các từ.
// Tìm và thay thế một từ cụ thể trong đoạn văn bản.
// Kiểm tra xem đoạn văn bản có bắt đầu bằng một từ cụ thể hay không.
// Kiểm tra xem đoạn văn bản có kết thúc bằng một từ cụ thể hay không.
// Chuyển đổi đoạn văn bản sang chữ in hoa.
// Chuyển đổi đoạn văn bản sang chữ thường.
// Loại bỏ khoảng trắng thừa ở đầu và cuối đoạn văn bản.

const text = "k18-ft-hehe";
console.log(text.length);
const splitTexts = text.split("lala");
console.log(splitTexts);
console.log(text.indexOf("-"));
console.log(text.slice(0, 3));

// k18-ft-hehe
// b1 tìm đấu - đầu tiên : 3  : indexOf
// lấy được từ 0=> 3 : k18 : slice
// ném vô mảng : response.push("k18")
// chuỗi còn lại ft-hehe : slice
// b1 tìm đấu - của ft-hehe : 2 :  indexOf
// lấy được 0 => 2: ft  : slice
// ném vô mảng : push
// chuỗi còn lại hehe :slice
// b1 tìm đấu - của hehe : -1 :indexOf
// return hehe : slice
// ném vô mảng :push
// return mảng or clg ra mảng đó

const splitCustom = (text, splitText) => {
  console.log("start-----");
  console.log("vòng 1");
  const response = [];
  const index1 = text.indexOf("-");
  console.log("index1 ", index1);

  const text1 = text.slice(0, index1);
  console.log("text1 ", text1);

  response.push(text1);
  const newText1 = text.slice(index1 + 1);
  console.log("mảng vòng 1 tìm được là ", response);
  console.log("newText1 ", newText1);
  console.log("hết vòng 1");

  console.log("vòng 2");
  const index2 = newText1.indexOf("-");
  console.log("index2 ", index2);

  const text2 = newText1.slice(0, index2);
  console.log("text2 ", text2);

  response.push(text2);
  const newText2 = newText1.slice(index2 + 1);
  console.log("mảng vòng 2 tìm được là ", response);
  console.log("newText2", newText2);
  console.log("hết vòng 2");

  console.log("vòng 3");
  const index3 = newText2.indexOf("-");
  console.log("index3 ", index3);

  if (index3 === -1) {
    const newText3 = newText2;
    response.push(newText3);
  }
  console.log("mảng vòng 3 tìm được là ", response);
  console.log("hết vòng 3");

  return response;
};
console.log(splitCustom(text, "-")); //["k18","ft","hehe"]

//  k18-ft-hehe: ["k","1","8",...]
// start,end
// chạy từ 0 -> length
// start = 0;
// end = index khi text[i] = "-"

const textReplace = text.replace("-", ":");
const textReplaceAll = text.replaceAll("-", ":");

console.log(textReplace);
console.log(textReplaceAll);

const upperCase = text.toUpperCase();
const lowerCase = text.toLocaleLowerCase();

console.log("upperCase ", upperCase);
console.log("lowerCase ", lowerCase);

console.log(Number("1234"));
console.log(+"1234");
const number = 1234;
console.log(number.toString());
console.log(number + "");

const array = [1, 2, 4, "hehe"];
console.log("length");
console.log(array.length);

for (let i = 0; i < array.length; i++) {
  console.log("vi tri ", i);
  console.log(array[i]);
}

console.log(text.split(""));
console.log(array.join("---"));
// đặt 1 biến trả về là let
// for (o=> mảng .length)
// let + arr[i]+ "---"
// return array
// vồng 1: 1
// "+ "1---"=> "1---"
// vồng 2: 2
// "1---"+ "2---"=> "1---2---"
// vồng 3: 3
// "1---2---"+ "3--"=> "1---2---3---"
// vồng 4: 4
// "1---2---3---"+ "hehe"=> "1---2---4---hehe"
