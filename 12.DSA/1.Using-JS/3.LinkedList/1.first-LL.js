// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler


// let myLL={
//     head:{
//         value:10,
//         next:{
//             value:5,
//             next:{
//                 value:6,
//                 next:null
//             }
//         }
//     }
// }


class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    this.head = {
      value,
      next: null
    };
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    const newNode = new Node(value);
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }

  prepend(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  }

  printList() {
    const array = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    console.log(array); // Log the array to see the list
    return array; // Return the array if needed
  }

  insert(index, value) {
    if (index >= this.length) {
      return this.append(value);
    }
    const newNode = new Node(value);
    const leader = this.traverseToIndex(index - 1);
    const holdingPointer = leader.next;
    leader.next = newNode;
    newNode.next = holdingPointer;
    this.length++;
    this.printList(); // Print the list after insertion
    return this; // Return the updated linked list
  }

  traverseToIndex(index) {
    let counter = 0;
    let currentNode = this.head;
    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }
  remove(index) {
    const leader = this.traverseToIndex(index - 1);
    const unwantedNode = leader.next;
    leader.next = unwantedNode.next;
    this.length--;
    return this.printList()
  }
}

const myLL = new LinkedList(10);
myLL.append(5);
myLL.append(6);
myLL.prepend(1);
myLL.printList();
myLL.insert(2, 99);
console.log(myLL);
myLL.printList();
myLL.remove(3)
myLL.printList()  