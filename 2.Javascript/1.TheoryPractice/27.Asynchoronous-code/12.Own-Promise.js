function wait(duration) {
  const p = new Promise((resolve, reject) => {
    setTimeout(function () {
      resolve("resolve value ");
    }, duration);
  });
  return p;
}

async function demo() {
  console.log("hi");
  const val = await wait(1000);
  console.log("hello");
  console.log(val);
}
