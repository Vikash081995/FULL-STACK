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
  printList(){
    const array =[];
    let currentNode= this.head;
    while(currentNode!==null){
      array.push(currentNode.value)
      currentNode = currentNode.next
    }
  }
  insert(index, value){
    
  }
}
const myLL = new LinkedList(10);
myLL.append(5);
myLL.append(6);
myLL.prepend(1);
myLL.printList();
// myLL.insert(2, 99);
console.log(myLL)