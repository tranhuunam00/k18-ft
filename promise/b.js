const wait = async () => {
  setTimeout(() => {
    console.log("Log 2");
    res();
  }, 5000);
};

const test = async () => {
  console.log("Log 1");
  // sau 5 s

  const valueTimeout = await setTimeout(() => {
    console.log("Log 2 --ở trong tiemout");
  }, 5000);
  console.log("----1------");
  clearTimeout(valueTimeout);
  console.log(valueTimeout);

  const valuePromise = await new Promise((res, rej) => {
    setTimeout(() => {
      console.log("Log 2");
      res();
    }, 2000);
  });

  // console.log("----2------");
  // console.log(valuePromise);
  console.log("Log 3");
};

test();
