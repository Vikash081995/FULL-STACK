let pi: number = 3.14;
let movieTitle: string = "The Godfather";
// movieTitle = 9; // Error: Type '9' is not assignable to type 'string'.
movieTitle = "The Godfather 2";
movieTitle.toUpperCase();

let numCatLives: number = 9;
numCatLives += 1;

let numOver: boolean = true;

//Type Inference
let tvShow = "Olive kittens";
tvShow = "Kittens";
// tvShow=true; // Error: Type 'true' is not assignable to type 'string'.

let isFunny = false;
isFunny = true;

//The any type
let thing: any = "hello";
thing = 1;
thing = true;
thing();
thing.toUpperCase();

const movies = ["The Godfather", "The Dark Knight", "The Godfather 2"];
let foundMovie: any;

for (let movie of movies) {
  if (movie === "The Dark Knight") {
    foundMovie = movie;
  } else {
    foundMovie = "No movie found";
  }
}

foundMovie.toUpperCase();

//----------------------------------------------------
let rapper: string = "Kanye West";
rapper.length; //ok
// rapper.push("hello"); //error

//----------------------------------------------------
let evolvingAny;
evolvingAny = 0;
// evolvingAny(); //ok in ts but run time error
