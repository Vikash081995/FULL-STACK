10-- > 5-- > 6

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
    }
    this.tail = this.head;
    this.length = 1
  }
  append(value) {
    const newNode = new Node(value)
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }
  prepend(value) {
    const newNode = new Node(value)
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  }
  insert(index, value)
}
myLL.append(5);
myLL.append(6);
const myLL = new LinkedList(10);
console.log(myLL)
myLL.prepend(1);
console.log(myLL)