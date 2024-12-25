
const fs = require('fs');

const randomText = fs.readFileSync('./txt/readTxt.txt', 'utf8');

console.log(randomText);