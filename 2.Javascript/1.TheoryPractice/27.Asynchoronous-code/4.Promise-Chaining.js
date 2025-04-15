const BASE_URL = "https://pokeapi.co/api/v2/pokemon/";
const url = `${BASE_URL}/1`;

// fetch(url)
//   .then((res1) => {
//     console.log(res1);
//     fetch(`${BASE_URL}/2`)
//       .then((res2) => {
//         console.log(res2);
//         ``;
//       })
//       .catch((err) => {
//         console.log("ERR", err);
//       });
//   })
//   .catch((err) => console.log("ERR", err));

fetch(`${BASE_URL}/1`)
  .then((res1) => {
    console.log("RESPONSE 1", res1);
    return fetch(`${BASE_URL}/2`);
  })
  .then((res2) => {
    console.log("RESPONSE 2", res2);
    return fetch(`${BASE_URL}/3`);
  })
  .then((res3) => {
    console.log("RESPONSE 3", res3);
    return fetch(`${BASE_URL}/4`);
  })
  .catch((err) => {
    console.log("In the  catch! Error", err);
  });
