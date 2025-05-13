async function greet() {
    return 'Hello'
}

greet().then((val) => {
    console.log('Promise resolved with value: ', val)
})

async function add(x, y) {
    if (typeof x !== number || typeof y !== number) {
        throw 'X and Y must be numbers'
    }
    return x + y
}

add('e', 'r').then((val) => {
    console.log('Promise resolved with value: ', val)
}).catch((err) => {
    console.log('Promise rejected with error: ', err)
})

