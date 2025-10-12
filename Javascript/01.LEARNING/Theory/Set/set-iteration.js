let text="hello world"

let set = new Set(text.split(""))
console.log(set);
//Set(8) { 'h', 'e', 'l', 'o', ' ', 'w', 'r', 'd' }

for( let word of set){
    console.log(word)
}

//h
//e
//l
//o
// 
//w
//r
//d