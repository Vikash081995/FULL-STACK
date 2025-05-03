const {Buffer} = require('buffer');

const memoryContainer= Buffer.alloc(4)

console.log(memoryContainer) // <Buffer 00 00 00 00>

console.log(memoryContainer[0]) // 0
memoryContainer[0] = 0xf4;
memoryContainer[1]=0x34;
memoryContainer[2]=0x12;
memoryContainer[3]=0x90;
console.log(memoryContainer) // <Buffer f4 34 12 90>  
console.log(memoryContainer.toString("hex"))  