// //normal function

// function test(){

// }


const func = ()=>{
     
}


//example 
const Sum=(a,b)=>{
    return a+b 
}

//IIFE
(function(){
    console.log("IIFE")
})()

//iife with arrow function

(()=>{
    console.log("IIFE"
    
    )
})


//this in arrow function v 
const test =()=>{
    console.log(this)
}
test()