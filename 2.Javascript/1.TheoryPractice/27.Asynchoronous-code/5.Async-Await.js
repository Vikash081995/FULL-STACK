async function getFirstPokemon(){
    const result = await fetch('https://pokeapi.co/api/v2/pokemon/1/');
    console.log(result)
}

//===
async function getFourPokemon(){
    const res1 = await fetch('https://pokeapi.co/api/v2/pokemon/1/');
    console.log(res1)
    const res2 = await fetch('https://pokeapi.co/api/v2/pokemon/2/');
    console.log(res2)
    const res3 = await fetch('https://pokeapi.co/api/v2/pokemon/3/');
    console.log(res3)
    const res4 = await fetch('https://pokeapi.co/api/v2/pokemon/4/');
    console.log(res4)
}