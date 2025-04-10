var Emitter = require('./1.emitter')

var emt = new Emitter()

emt.on('greet',function(){
    console.log('Somewhere,someone said hello')
})

emt.on('greet',function(){
    console.log('A greeting occured')
})

console.log('Hello')
emt.emit('greet')