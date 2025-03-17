function* fetchData() {
  const response = yield fetch("https://jsonplaceholder.typicode.com/todos/1");
  const data = yield response.json();
  return data;
}


const generator = fetchData();

generator.next().value
  .then((response) => generator.next(response))
  .then((data) => console.log(data.value))
  .catch((error) => console.log(error))