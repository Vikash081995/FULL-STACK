function foo(msg){
    function hello(){
        console.log(`Hello ${msg}`);
        
    }
    hello();
}

foo("World");

//output: Hello World