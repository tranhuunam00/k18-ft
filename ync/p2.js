// // làm việc a trong vòng 7 s: log a
// // làm việc b trong vòng 5 s: log b

// const newPromiseA = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("hoàn thành việc...a..");
//   }, 1000);
// })
//   .then((value) => {
//     console.log("value1", value);
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         resolve("hoàn thành việc...b..");
//       }, 3000);
//     });
//   })
//   .then((value) => {
//     console.log("then2", value);
//   });

// console.log(newPromiseA);

// const newPromiseB = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("hoàn thành việc...a..");
//   }, 2000);
// });

// Promise.resolve(1).then((value) => console.log(value));

const wait = async (delayTime = 3000) => {
  return new Promise((resolve, rej) => {
    setTimeout(() => {
      console.log("time" + new Date());
      resolve();
    }, delayTime);
  });
};

const a = wait;
const b = wait();

b.then((value) => {
  console.log("value", value);
});

console.log(a);
console.log(b);

const test2 = async () => {
  console.log(1);
  // const a = await setTimeout(() => {
  //   console.log("hết timeout");
  // }, 5000);
  // for (let i = 0; i < 5; i++) {
  //   await wait(i * 1000);
  // }
  await [1, 2, 3, 4, 5].forEach(async (value, index) => {
    await wait(value * 1000);
  });
  console.log(2);
};
test2();

// const test = async () => {
//   console.log("log 1");
//   await new Promise((resolve, rej) => {
//     setTimeout(() => {
//       console.log("nhả");
//       // resolve();
//     }, 3000);
//   });
//   // hàm bất đồng bộ  -----
//   console.log("log2");
// };

// test();
