10-->5-->6

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

class LinkedList{
    constructor(value){
        this.head={
            value,next:null
        }
        this.tail= this.head;
        this.length=1
    }
}

const myLL = new LinkedList(10);
console.log(myLL)