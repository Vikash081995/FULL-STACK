//Function Scope
let bird="peacock";

function birdWatch(){
    let bird="sparrow";
    console.log(bird);
}
birdWatch();
console.log(bird);
//output:
//sparrow
//peacock