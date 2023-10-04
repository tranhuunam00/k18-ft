// const a = () => {
//   console.log(1);
// };
// setTimeout(a, 1000);

// function delayTime(delay = 2000) {
//   return new Promise((resolve) => {
//     setTimeout(resolve, delay);
//   });
// }

// const user = {
//   id: 1,
//   name: 1,
// };
// const json = JSON.stringify(user);

// console.log(json);
// console.log(typeof json);

// const newUser = JSON.parse(json);
// console.log("newUser", newUser);

// console.log("---------1------");
// const a = delayTime; // [Function: delayTime]
// console.log("a", a);
// console.log("---------2------");
// const b = delayTime(); // promise
// console.log("b", b);
// console.log("---------3------");
// const d = delayTime(3000); // promise
// console.log("d", d);

// async function wait() {
//   console.log("Log 1");
//   await delayTime(5000);
//   console.log("Log 2");
//   await delayTime(0);
//   console.log("Log 3");
// }
const fetchData = fetch("https://jsonplaceholder.typicode.com/todos/1");

fetchData.then((response) => response.json()).then((json) => console.log(json));
