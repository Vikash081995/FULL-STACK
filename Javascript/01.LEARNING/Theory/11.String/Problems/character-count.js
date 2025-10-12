let freq={}

for(let letter of "missingpi"){
    freq[letter]= freq[letter]+1 ||1
}
console.log(freq);
//{ m: 1, i: 3, s: 2, n: 1, g: 1, p: 1 }