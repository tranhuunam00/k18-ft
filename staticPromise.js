const k = async () => {
  console.log("ham k");
  setTimeout(() => {
    console.log("time iut");
  },249)
  await new Promise((rev, rej) => rev()).then((a) => console.log("kk"));
  console.log("hehe");
};
const x = async () => {
  await new Promise((rev, rej) => {
    setTimeout(() => {
      console.log(2);
      rev();
    }, 0);
  });
};

async function fetchData() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();
  console.log("fetch");
  setTimeout(() => {
    console.log("time out 2");
  },0)
  return data;
}

const test = async () => {
  k();
  console.log("log n"); // dong bo
  fetchData();
};
 // 2 - 24 -3 - 4 - 16 17 18
const log1 = async () => {
  console.log("log 1");
};

const log2 = async () => {
  console.log("log 2");
  console.log("log 2");
};

// hafm k => log n? kk > hehe > fetch
// const test2 = async () => {
//   log2()  // async
//   console.log("log n"); // dong bo
//   k()
// };

// const teste = async () => {
//   k()
//   // async
//   log2()
//   console.log("log n"); // dong bo
// };
test();
// test2()
