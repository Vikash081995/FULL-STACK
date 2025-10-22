const EventEmitter = require("events");
const emitter = new EventEmitter();

setInterval(()=>{
    emitter.emit('message',`Interval (${new Date().getSeconds()})`)
})

emitter.on('message',(message)=>{
    console.log(`Additional listener recieved: ${message}`)
})

emitter.once("message", (message) => {
  console.log(`Once listener received: ${message}`);
});


setTimeout(() => {
  emitter.emit("message", "Timeout says hello!");
}, 2500);