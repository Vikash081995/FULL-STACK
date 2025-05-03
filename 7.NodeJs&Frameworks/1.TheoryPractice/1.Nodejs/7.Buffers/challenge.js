const {Buffer} = require('buffer');

const buff = Buffer.alloc(3) //
buff[0] = 0x12;
buff[1] = 0x34;
buff[2] = 0x56;

console.log(buff) // <Buffer 12 34 56>
console.log(buff.toString("hex")) // 123456
console.log(buff.toString("utf-8")) // 123456