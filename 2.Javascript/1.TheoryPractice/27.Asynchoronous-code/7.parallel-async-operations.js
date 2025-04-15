const results =[];

// fetch(`https://pokeapi.co/api/v2/pokemon/1/`).then(res=>res.json()).then(data=>results.push(data))
// fetch(`https://pokeapi.co/api/v2/pokemon/2/`).then(res=>res.json()).then(data=>results.push(data))
// fetch(`https://pokeapi.co/api/v2/pokemon/3/`).then(res=>res.json()).then(data=>results.push(data))

async function getFirstPokemon(){
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/1/`);
    const data = await res.json();
    results.push(data);
}

async function getSecondPokemon(){
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/2/`);
    const data = await res.json();
    results.push(data);
}

async function getThirdPokemon(){
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/3/`);
    const data = await res.json();
    results.push(data);
}

getFirstPokemon();
getSecondPokemon();
getThirdPokemon();  