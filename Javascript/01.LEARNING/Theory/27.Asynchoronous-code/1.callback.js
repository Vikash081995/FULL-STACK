const btn = document.querySelector("button");

function sayHi(){
    alert("hello")
}

btn.addEventListener("click",sayHi)

setTimeout(sayHi,3000)