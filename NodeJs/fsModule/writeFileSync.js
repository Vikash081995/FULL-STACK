const fs = require('fs');

const randomText = fs.readFileSync('./txt/readTxt.txt', 'utf8');

const outText="This is what we know about the avocado: \n"+randomText;
fs.writeFileSync('./txt/writeTxt.txt',outText);

