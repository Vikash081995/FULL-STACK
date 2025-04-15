const BASE_URL = "https://pokeapi.co/api/v2/pokemon/";
const url = `${BASE_URL}/1`;

fetch(url)
  .then((res) => console.log(res))
  .catch((err) => console.log("ERR", err));
