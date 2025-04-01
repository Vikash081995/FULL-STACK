class Cat {
  static numOfCats = 0;
  numLegs = 4;
  hasTail = true;
  constructor(name) {
    this.name = name;
    Cat.numOfCats++;
  }
  amputate() {
    this.numLegs = 3;
  }
}
