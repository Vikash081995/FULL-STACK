function outer() {
  let movie = "Avengers";

  function inner() {
    console.log(movie.toLowerCase());
  }
  inner();
}

//example 2
function GrandParent() {
  let movie = "Avengers";

  function Parent() {
    let movie = "Batman";
    function child() {
      let movie = "Superman";
      console.log(movie.toUpperCase());
    }
    child();
    console.log(movie.toLowerCase());
  }
  Parent();
  console.log(movie.toUpperCase());
}

//"SUPERMAN";
//"batman";
//"AVENGERS";
