//Implement a queue using two stacks
//Do not create an array inside the 'Queue' class.
//Queue should implement the methods 'add', 'peek', and 'remove'.

const Stack = require("./Stack/Stack");
class Queue {
  constructor() {
    this.first = new Stack();
    this.second = new Stack();
  }
  add(record) {
    this.first.push(record);
  }
  remove() {
    while (this.first.peek()) {
      const record = this.first.pop();
      this.second.push(record);
    }
    const record = this.second.pop();
    while (this.second.peek()) {
      const record = this.second.pop();
      this.first.push(record);
    }
    return record;
  }

  peek() {
    while (this.first.peek()) {
      const record = this.first.pop();
      this.second.push(record);
    }
    const record = this.second.peek();
    while (this.second.peek()) {
      const record = this.second.pop();
      this.first.push(record);
    }
    return record;
  }
}
