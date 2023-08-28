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

  return response;
};
console.log(splitCustom(text, "-")); //["k18","ft","hehe"]
