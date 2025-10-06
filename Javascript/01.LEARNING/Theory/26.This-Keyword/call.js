const conan ={
    name: 'Conan',
    city: 'Los Angeles',
    sing: function(){
        console.log("this is:",this)
        return `${this.name} is singing!`
    }
}

const lisa ={
    name:'lisa',
    city:'New York'
}

console.log(conan.sing())
console.log(conan.sing.call(lisa))

//============================================
const btn=document.querySelector('#btn');
btn.addEventListener('click',conan.sing.bind(conan))