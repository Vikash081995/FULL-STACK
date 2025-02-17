# create a queue data structure. the queue should be a class with methods 'add' and 'remove'.Adding to the queue should store an element until it is removed

example
const q = new Queue();
q.add(1);
q.remove(); // returns 1;

## implement a 'peek' method in this Queue class

peek should return the last element (the next one to be returned) from the queue _without_ removing it.

## Implement a "weave" function. This function should take two queues as arguments and combine them into one, alternating the elements

//example
//const q1 = new Queue();
//const q2 = new Queue();
//q1.add(1);
//q1.add(2);
//q2.add('a');
//q2.add('b');
//const q = weave(q1, q2);  
//q.remove() // 1
//q.remove() // 'a'
//q.remove() // 2
//q.remove() // 'b'
