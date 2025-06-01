const lotsOfFetchCalls = [
  fetch("https://pokeapi.co/api/v2/pokemon/1/"),
  fetch("https://pokeapi.co/api/v2/pokemon/2/"),
  fetch("https://pokeapi.co/api/v2/pokemon/3/"),
  fetch("https://pokeapi.co/api/v2/pokemon/4/"),
];

Promise.race(lotsOfFetchCalls)
  .then((winner) => {
    console.log(winner);
  })
  .catch((err) => {
    console.log(err);
  });
  