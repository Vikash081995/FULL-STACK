function identity<T>(value:T):T{
    return value
}

let output1 = identity<string>("Hello World")
let output2 = identity<number>(42)

console.log(output1) // Output: Hello World
console.log(output2) // Output: 42