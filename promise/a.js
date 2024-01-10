// delay
// callback
// setTimeout(() => { }, 5000)

// setInterval(() => { }, 1000)

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve();
  }, 0);
});

console.log(promise); // promise {undefined}

promise
  .then((value) => {
    console.log("value", value); //  {undefined}
    return new Promise((res) => {
      setTimeout(() => {
        res("pass then 1....");
      }, 2000);
    });
  })
  .then((value) => console.log("value2", value));
console.log(promise); // promise {undefined}

// chạy dòng 7 promise đang ở trạng thái pending
// dòng 8 : tạm dừng  => cho vào kho

// chạy dòng 15 promise đang ở trạng thái pending
// dòng 17 kho
// chạy dòng 20 promise đang ở trạng thái pending

// lôi cái kho ra

console.log("------------------------");

//
const wait = async () => {
  console.log("log2");
};

const test = async () => {
  console.log("log1");
  // 5s giây sau mới chạy log 2
  wait();
  console.log("log3");
};
test();
