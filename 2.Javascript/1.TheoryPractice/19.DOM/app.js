//DOM(Document Object Model)
//It is a programming interface for web documents.
//It represents the structure of the document as a tree of objects.

const img = document.getElementById("image");
console.dir(img);

const getElementByTag = document.getElementsByTagName("p");
console.dir(getElementByTag);

const header = document.getElementsByClassName("header");

const ul = document.getElementsByTagName("ul")[0];

console.log(header, ul);

const h1 = document.querySelector("h1");
console.log(h1);

const pg = document.querySelector("p");
console.log(pg);

const selectImage = document.querySelector("img");
console.log(selectImage);

const special = document.querySelector(".special");
console.log(special);

const lispeacial = document.querySelector("li.special");
console.log(lispeacial);

const inputs = document.querySelectorAll("input");
console.log(inputs);

const specialClass = document.querySelectorAll(".special");
console.log(specialClass);

const lis = document.querySelectorAll("li");
console.log(lis);

///----------------------------------------
//Value,src,href
//----------------------------------------
const AllInputs = document.querySelectorAll("input");
console.log(AllInputs, "all inputs");
console.log(AllInputs[0].value);
inputs[0].value = "hello";
console.log(AllInputs[0].value);
console.log(AllInputs[1].placeholder);
const anchor = document.querySelector("a");
console.log(anchor.href);
const image = document.querySelector("img");
console.log(image.src);
