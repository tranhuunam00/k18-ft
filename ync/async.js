// console.log("log1");
// console.log("log2");

// // hay doi n giây rồi thực hiện hàm callback

// // chạy liên tục cứ sau n giây thì thực hiện thực
// // callback sinh ra để làm nhiệm vụ hứng 1 đoạn code nào đó sau khi hàm bất đồng bộj chạy
// const idInterval = setInterval(() => {
//   console.log("interval");
// }, 1000);

// setTimeout(() => {
//   // cái này là call back
//   // nó sẽ thực thi sau 5
//   clearInterval(idInterval);
// }, 5000);

// console.log("log3");
// // log 1, 2, 3 , interval * 4 , callback chạy ,inter * nn

// promise:

console.log("RUNNING-----");
const age = 9;
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (age > 10) {
      // resolve("Bạn đủ tuổi");
    } else {
      // reject("Bạn chưa đủ tuổi ");
    }
  }, 1000);
});
promise
  .then((value) => {
    console.log("hoàn thành-----");
    console.log(value);
  })
  .catch((e) => {
    console.log("bị lỗi rồi-----");
    console.log(e);
  });
console.log("END-----");

// log 1 - log 2 sau 5s - log 3 sau log 2 3s
