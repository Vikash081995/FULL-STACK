const genFunction =function* (){
console.log('Hello');
yield;
console.log('world');
yield;
console.log('!');

}

const genObj= genFunction();
const o=genObj.next();
console.log(o); //{value:undefined,done:false}
genObj.next();