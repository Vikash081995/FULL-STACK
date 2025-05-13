const result = [];

fetch(`${BASE_URL}/1/`)
  .then((res) => {
    result.push(res);
    return fetch(`${BASE_URL}/2/`);
  })
  .then((res) => {
    result.push(res);
    return fetch(`${BASE_URL}/3/`);
  })
  .then((res) => {
    result.push(res);
    return fetch(`${BASE_URL}/4/`);
  });


async function get3Pokemon(){
    const res1 = await fetch(`${BASE_URL}/1/`);
    const res2 = await fetch(`${BASE_URL}/2/`);
    const res3 = await fetch(`${BASE_URL}/3/`);
    const res4 = await fetch(`${BASE_URL}/4/`);

    const results = [res1, res2, res3, res4]
}