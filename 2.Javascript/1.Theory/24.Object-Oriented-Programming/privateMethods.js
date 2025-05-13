class MyClass{
    #privateMethod(){
        console.log('Private Method');
    }

    publicMethod(){
        this.#privateMethod();
    }   

}

const myClass = new MyClass();
// myClass.#privateMethod();
myClass.publicMethod();