class Node {
  constructor(data) {
    this.value = data;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  // Returns the first element in the queue without removing it
  peek() {
    if (this.length === 0) return null;
    return this.first;
  }

  // Adds a new element to the end of the queue
  enqueue(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    this.length++;
    return this;
  }

  // Removes the first element from the queue
  dequeue() {
    if (!this.first) return null; // Queue is empty
    if (this.first === this.last) {
      this.last = null; // If there's only one element, reset last
    }
    const dequeuedNode = this.first; // Store the node to be removed
    this.first = this.first.next; // Move the first pointer to the next node
    this.length--;
    return dequeuedNode.value; // Return the value of the dequeued node
  }
}

// Example usage
const myQueue = new Queue();
console.log(myQueue.peek()); // null
myQueue.enqueue("Joy");
myQueue.enqueue("Matt");
myQueue.enqueue("Pavel");
console.log(myQueue.dequeue()); // 'Joy'
console.log(myQueue.peek()); // 'Matt'
