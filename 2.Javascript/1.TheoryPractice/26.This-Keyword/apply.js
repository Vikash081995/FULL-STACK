const ringo={
    name:'Ringo',
    city:'Los Angeles',
    greet:function(greeting,punctuation){
        console.log("this is:",this)
        return `${this.name} says ${greeting} ${punctuation}`
    }
}

const george={
    firstName:'George',
    lastName:'Harrison',
}

ringo.greet.call(george,'Hello','!')
ringo.greet.apply(george,['Hello','!'])
ringo.greet.bind(george,'Hello','!')()
