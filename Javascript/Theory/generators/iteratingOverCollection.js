function* arrayiterator(array){
    for(let item of array){
        yield item;
    }
}

const array = ['a','b','c','d'];
const iterator = arrayiterator(array);

for(const value of iterator){
    console.log(value); //a b c d
}