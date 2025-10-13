const fs = require('node:fs')

const content = fs.readFileSync('notes.txt', 'utf8')

//Synchornous way 

fs.writeFileSync('copy.txt','I want to write this to a file','utf-8')


//Asynchronous way

fs.readFile('notes.txt','utf-8',(err,data)=>{
    if(err){
        console.log(err)
    }else{
        console.log(data)
    }
}   )

fs.writeFile('async.txt','This is an async file write','utf-8',(err)=>{
    if(err){
        console.log(err)
    }else{
        console.log('File written successfully')
    }
})

console.log(content)