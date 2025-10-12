
let o = {
    x:1,
    y:2,
    z:3
}

for( let key of Object.keys(o)){
    console.log(key);
    console.log(o[key]);
}
// x
// 1
// y
// 2
// z
// 3

for (let value of Object.values(0)){
    console.log(value)
}

// 1
// 2
// 3

for(let [k,v] of Object.entries(o)){
    console.log(k,v);   
}

// x 1
// y 2
// z 3