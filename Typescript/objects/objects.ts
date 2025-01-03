type  Dog={
    name:string,
    breed:string,
    age:number
}

const dog:Dog={
    name:"Elton",
    breed:"Australian Shepherd",
    age:0.5
}

// console.log(dog.random); Property 'random' does not exist on type 'Dog'

//==============================================================
function printName(person:{first:string,last:string}){
    console.log(`${person.first} ${person.last}`);
}

printName({first:"Mick",last:"Jagger"}); //ok
// printName({first:"Mick"}); // Error: Property 'last' is missing in type '{ first: string; }' but required in type '{ first: string; last: string; }'.

//==============================================================
let coordinates:{x:number,y:number}={x:34,y:2};

function randomCoordinate():{x:number,y:number}{
    return {x:Math.random(),y:Math.random()}
}

// printName({first:"Mick",last:"Jagger",age:47}); // Error: Object literal may only specify known properties, and 'age' does not exist in type '{ first: string; last: string; }'.

const singer ={first:"Mick",last:"Jagger",age:47}; //ok
printName(singer);  
//==============================================================
//TYPE ALIASES
//===============================================================
//instead of writing out object types in an annotation, we can create a type alias
type Point={
    x:number,
    y:number
}

function randomPoint():Point{
    return {x:Math.random(),y:Math.random()}
}

//===============================================================
//Optional properties
//===============================================================
type OptionalPerson={
    first:string,
    last:string,
    age?:number
}

function printhisName(person:OptionalPerson){
    console.log(`${person.first} ${person.last}`);
}
printhisName({first:"Mick",last:"Jagger"}); //ok
printhisName({first:"Mick",last:"Jagger",age:47}); //ok

//===============================================================
//Readonly properties
//===============================================================
type ReadonlyPerson={
    readonly first:string,
    readonly last:string,
    age?:number
}

const user : ReadonlyPerson={
    first:"Mick",
    last:"Jagger",
    age:47
}

console.log(user.first); //Mick
// user.first="John"; //Error: Cannot assign to 'first' because it is a constant or a read-only property
//===============================================================
//Intersection types
//===============================================================
type Circle={
    radius:number
}

type Colorful={
    color:string
}

type ColorfulCircle=Circle & Colorful;

const happyFace:ColorfulCircle={
    radius:4,
    color:"yellow"
}

console.log(happyFace.radius); //4
console.log(happyFace.color); //yellow

type Cat={
    numLives:number
}
type Doggy={
    breed:string
}

type CatDog=Cat & Doggy & {
    age:number
}

const fluffy:CatDog={
    numLives:9,
    breed:"Lab",
    age:4
}