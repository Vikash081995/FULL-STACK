const fs = require('fs');

const writtenfile1= fs.writeFile("./fsModule/txt/writeTxt.txt","This is written file",(err)=>{
    console.log("file written")
})