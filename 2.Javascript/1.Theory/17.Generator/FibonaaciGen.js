function* fibo() {
  let prev = 0;
  let curr = 1;

  while (true) {
    yield curr;
    const next = prev + curr;
    prev = curr;
    curr = next;
  }
}
const fiboGen = fibo();

for (let i = 0; i < 5; i++) {
  console.log(fiboGen.next().value);
}
