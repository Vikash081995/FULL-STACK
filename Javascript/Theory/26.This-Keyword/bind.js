function applySalesTax(taxPrice,price){
    return price+price*taxPrice
}

const applySalesTaxPrice=applySalesTax.bind(null,0.0725)
const applyMTsalesTaxPrice=applySalesTax.bind(null,0.06)
console.log(applySalesTaxPrice(100))
console.log(applyMTsalesTaxPrice(100))

//Bindng Arguments 

function multiply(a,b){
    return a*b
}

const double = multiply.bind(null,2)
const triple = multiply.bind(null,3)
const alwaysNine = multiply.bind(null,3,3)

//============================================
const btn = document.querySelector('#btn');

btn.addEventListener('click',function(){
    console.log('button is clicked')
})