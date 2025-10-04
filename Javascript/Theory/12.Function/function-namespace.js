let module = (function () {
  let privateVar = 0;

  return {
    increment() {
      privateVar++;
    },
    get() {
      return privateVar;
    },
  };
})();

module.increment();
console.log(module.get()) //1