console.log("log 1");

const promise = new Promise((res, rej) => {
  setTimeout(() => {
    console.log("Log2");
    res(); // đổi trạng - sang hoàn thành
    // rej("đã xuất hiện lỗi");
  }, 3000);
});

promise
  .then((res) => {
    // log 3 xuất hiện sau 3 s kể từ khi có log 2
    return "log" + new Date();
  })
  .then((value) => {
    console.log("then 2-------------");
    console.log("value", value);
    console.log(n);
  })
  .catch((e) => {
    console.log("error-------");
    console.log(e);
  })
  .finally(() => {
    console.log("finally");
  });
