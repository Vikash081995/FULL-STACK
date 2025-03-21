const EventEmitter =require('events');

const emitter = new EventEmitter();

emitter.on('order-pizza',(size,toppings)=>{
    console.log(`order received! Baking a ${size} pizza with ${toppings}`)
})

emitter.on('order-pizza',(size)=>{
    if(size === 'large'){
        console.log('serving complimentary drink')
    }
})

emitter.emit('order-pizza','large','mushroom','spinach')