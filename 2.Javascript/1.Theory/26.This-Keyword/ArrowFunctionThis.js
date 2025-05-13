class Cat {
  constructor(firstName) {
    this.firstName = firstName;
  }

  superGreet() {
    console.log(`#1: I am ${this.firstName}`);

    setTimeout(function () {
      console.log(`#2. I am ${this.firstName}`);
    }, 500);
    setTimeout(() => {
      console.log(`#3 i am ${this.firstName}`);
    }, 1000);
  }
}

let kitty = new Cat("Kitty");
kitty.superGreet();
// #1: I am Kitty
// #2. I am undefined
// #3 i am Kitty