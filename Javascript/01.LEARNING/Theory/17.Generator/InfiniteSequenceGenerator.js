function* infiniteSequenceGenerator() {
  let i = 0;
  while (true) {
    yield i++;
  }
}

const generator = infiniteSequenceGenerator();
console.log(generator.next().value); //0
console.log(generator.next().value); //1
console.log(generator.next().value); //2
console.log(generator.next().value); //3
