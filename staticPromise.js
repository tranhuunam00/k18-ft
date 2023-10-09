//
const delay = async (delay = 2000) => {
  await new Promise((res, rej) => {
    setTimeout(res, delay);
  });
  return "delay " + delay;
};

const delayError = async (delay = 2000) => {
  await new Promise((res, rej) => {
    setTimeout(rej, delay);
  });
  return "delay " + delay;
};

const test = async () => {
  console.log("start");
  const a = await delay(2000);
  console.log("done1", a);
  const b = await delay(4000);
  console.log("done2", b);
  console.log("end");
};

const test2 = async () => {
  try {
    const res = await Promise.all([delay(2000), delay(4000), delayError(3000)]);
    console.log(res[0]);
  } catch (error) {
    console.log("error", error);
  }
};
// test();
test2();
var user = 1;

if (true) {
  let x = 1;
}
console.log(x);
