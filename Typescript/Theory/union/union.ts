let mathematician = Math.random()>0.5?undefined:"Newton";
//type of mathematician is string | undefined

//Declaring union type
let thinker:string | null = null;

if(Math.random()>0.5){
    thinker = "Descartes";
}


// type narrowing
let admiral :number | string;
admiral ="Grace Hopper";
admiral.toUpperCase(); // OK
admiral = 1906;
admiral.toFixed(2); // OK

//type narrowing with conditional checks
let researcher = Math.random()>0.5 ?"Marie Curie":1954;

if(typeof researcher === 'string'){
    researcher.toUpperCase(); // OK
}

if(!(typeof researcher === 'string')){
    researcher.toFixed(2); // OK
}

//type narrowing with equality checks 
let scientist = Math.random()>0.5 ?"Marie Curie":"bacon";

if(scientist === "Marie Curie"){
    scientist.toUpperCase(); // OK
}

if(scientist !== "Marie Curie"){
    scientist.toLowerCase(); // OK
}