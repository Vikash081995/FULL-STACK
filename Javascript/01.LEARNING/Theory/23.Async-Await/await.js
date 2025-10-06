async function getPlanets() {
    const res = await axios.get('https://swapi.dev/api/planets/')
    console.log(res.data)
}

getPlanets().catch((err) => {
    console.log('In the catch')
    console.log(err)
})