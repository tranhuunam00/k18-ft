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

const splitCustom = (text, splitText) => {
  const response = [];
  // check xem index của ông splitText ở vị trí số mấy trong chuỗi text
  // cắt chuỗi từ ví trị đầu tiên ? đến index đó
  // nén chuỗi đã cắt vào trong mảng

  return response;
};
console.log(splitCustom(text, "-")); //["k18","ft","hehe"]

// k18-ft-hehe
// b1 tìm đấu - đầu tiên : 3
// lấy được từ 0=> 3 : k18
// ném vô mảng
// chuỗi còn lại ft-hehe
// b1 tìm đấu - của ft-hehe : 2
// lấy được 0 => 2: ft
// ném vô mảng
// chuỗi còn lại hehe
// b1 tìm đấu - của hehe : -1
// return hehe
// ném vô mảng
