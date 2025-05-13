//Destructuring arrays 

const raceResults = ["Elsaasasa", "Galenm Rupp", "Jared ward"];

const [gold, silver, bronze] = raceResults;
console.log(gold, silver, bronze);

//Destructuring objects
const runner = {
  first: "alan",
  last: "walker",
  country: "UK",
  title: "alan walker and co",
};

const { first, last, country } = runner;
console.log(first);
console.log(last);
console.log(country);

//===========================================================
const runn = {
  first: "Eulia",
  last: "last",
  country: "kenya",
};

function print(person) {
  const { first, last, title = "default" } = person;
  console.log(`${first} ${last},${title}`);
}

print(runn);
