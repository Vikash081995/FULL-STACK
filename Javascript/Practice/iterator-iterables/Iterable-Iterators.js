//Creating an Iterable

const myIterable ={
    [Symbol.iterator](){
        let step=0;
        return{
            next(){
                step++;
                if(step===1){
                    return{value:'hello',done:false}
                }else if(step===2){
                    return{value:'world',done:false}
                }
                return{value:undefined,done:true}
            }
        }
    }
}

// using the iterable with a for of loop
for(const word of myIterable){
    console.log(word)
}

//Using the iterable with the spread operator
const words =[...myIterable]
console.log(words);

//===========================================
//Custom iterators

function createIterator(array){
    let index=0;
    return {
        next(){
            if(index<array.length){
                return {value:array[index++],done:false}
            }else{
                return {value:undefined,done:true}
            }
        }
    }
}

const myarr=['a','b','c'];
const iterator=createIterator(myarr);
console.log(iterator.next()); //{value:'a',done:false}
console.log(iterator.next()); //{value:'b',done:false}
console.log(iterator.next()); //{value:'c',done:false}
console.log(iterator.next());//{value:undefined,done:true}