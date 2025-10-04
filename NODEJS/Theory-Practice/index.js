Promisesfetch("https://api.demo.foo/v1/todo")
  .then((response) => response.json())
  .then((json) => console.log(json))
  .catch((error) => console.log(error)); // Async/Await

const fetchData = async () => {
  try {
    const response = await fetch("https://api.demo.foo/v1/todo");
    const json = await response.json();
    console.log(json);
  } catch (error) {
    console.log(error);
  }
};
fetchData();
// [{userId: 1, id: 1, title: 'delectus aut autem', completed: false}]
