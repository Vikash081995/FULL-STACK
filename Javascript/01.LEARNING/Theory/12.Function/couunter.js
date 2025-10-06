function counter() {
  let n = 0;

  return {
    count() {
      return n++;
    },
    reset() {
      n = 0;
    },
  };
}

let c = counter();
console.log(c.count()); //0
console.log(c.count()); //1
c.reset();
console.log(c.count()); //0
