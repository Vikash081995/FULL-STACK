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

class DoublyLinkedList {
    constructor(value) {
        this.head = {
            value,
            next: null,
            prev: null,
        };
        this.tail = this.head;
        this.length = 1;
    }

    //append or push
    append(value) {
        const newNode = {
            value,
            next: null,
            prev: null,
        };
        newNode.prev = this.tail
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        return this;
    }

    //prepend or unshift
    prepend(value) {
        const newNode = {
            value,
            next: null,
            prev: null
        }
        newNode.next = this.head;
        this.head.prev = newNode;
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

    //insert
    insert(index, value) {
        if (index >= this.length) {
            return this.append(value);
        }
        const newNode = {
            value,
            next: null,
            prev: null,
        };
        const leader = this.traverseToIndex(index - 1);
        const follower = leader.next;
        leader.next = newNode;
        newNode.prev = leader;
        follower.prev = newNode;
        newNode.next = follower;
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

}

const myLL = new DoublyLinkedList(10);
myLL.append(5);
myLL.append(6);
myLL.prepend(1);
myLL.printList();
myLL.insert(2, 99);
console.log(myLL);
myLL.printList();

