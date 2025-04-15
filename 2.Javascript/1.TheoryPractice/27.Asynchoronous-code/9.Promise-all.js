const lotsOfFetchCalls = [fetch('https://pokeapi.co/api/v2/pokemon/1/'),fetch('https://pokeapi.co/api/v2/pokemon/2/'),fetch('https://pokeapi.co/api/v2/pokemon/3/'),fetch('https://pokeapi.co/api/v2/pokemon/4/')];


Promise.all(lotsOfFetchCalls).then(res=>{
    console.log("Promise of all is done and resolved",res)
}).catch(e=>{
    
})