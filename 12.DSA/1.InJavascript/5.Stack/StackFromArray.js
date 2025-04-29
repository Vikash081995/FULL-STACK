class Stack {
    constructor(){
        this.arrays = []
    }
    peek(){
        return this.arrays[this.arrays.length-1]
    }
    push(value){
        this.arrays.push(value)
        return this
    }
    pop(){
        if(this.arrays.length === 0) return null
        return this.arrays.pop()
    }
}

const myStack = new Stack();
myStack.peek()
myStack.push('google')
myStack.push('udemy')