const fetchData = async (searchTerm) => {
  const response = await axios.get("https://swapi.dev/api/films", {
    params: {
      search: searchTerm,
    },
  });
  console.log(response.data);

  if (response.data.Error) {
    return [];
  }
  return response.data.Search;
};

const root = document.querySelector(".autocomplete");
root.innerHTML = `
<label>
<b>Search for a movie  </b>
<input class="input" />
<div class="dropdown">
<div class="dropdown-content isActive">
<div class="dropdown-item" id="target">
</div>
</div>
</label>
`;

const input = document.querySelector("input");
const dropdown = document.querySelector(".dropdown");
const resultWrapper = document.querySelector('.results')

const onInput = async (event) => {
  const movies = await fetchData(event.target.value);

  for (let movie of movies) {
    const div = document.createElement("div");

    div.innerHTML = `
    <img src="${movie.Poster}">
    <h1>${movie.Title}</h1>
    `;

    document.querySelector("#target").appendChild(div);
  }
};
input.addEventListener("input", debounce(onInput, 1000));
