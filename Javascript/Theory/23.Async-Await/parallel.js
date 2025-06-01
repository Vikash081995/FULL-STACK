async function get3pokemon(){
    const poke1 = await axios.get('https://pokeapi.co/api/v2/pokemon/1')
    const poke2 = await axios.get('https://pokeapi.co/api/v2/pokemon/2')
    const poke3 = await axios.get('https://pokeapi.co/api/v2/pokemon/3')

    await poke1
    await poke2
    await poke3
    const results =await Promise.all([poke1,poke2,poke3])
    console.log(poke1)
    console.log(poke2)
    console.log(poke3)
}

get3pokemon()

