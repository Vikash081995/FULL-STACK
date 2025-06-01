class Counter {
  constructor(startingNum = 0, incrementBy = 1) {
    this.count = startingNum;
    this.incrementBy = incrementBy;
  }
  start() {
    setInterval(this.incrementAndPrint.bind(this), 1000);
  }
  incrementAndPrint() {
    console.log(this.startingNum);
    this.count += this.incrementBy;
  }
}

const counter = new Counter();
