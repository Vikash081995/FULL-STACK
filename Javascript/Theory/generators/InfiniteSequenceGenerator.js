function * infiniteSequenceGenerator(){
   let i =0;
   while(true){
    yield i++;
   }
}

const generatorn = infiniteSequenceGenerator();
console.log(generatorn.next().value); //0
console.log(generatorn.next().value); //1
console.log(generatorn.next().value); //2
console.log(generatorn.next().value); //3