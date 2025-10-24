//Directions 

//Return the middle  node of the linked list 
//If the list has even number of elements, return 
//the node at the end of the first half of the list.`
//dont use a counter variable  dont retrieve the length of the list


function midpoint(list){
    let slow =list.head;
    let fast = list.head;
    while(fast.next && fast.next.next){
        slow = slow.next;
        fast = fast.next.next;
    }
    return slow;
}