function whatIsThis(){
    console.log("The value of this is:" +this)
}

const person={
    name:'Conan',
    city:'Los Angeles',
    sing:function(){
        console.log("this is:",this)
        return `${this.name} is singing!`
    }
}


class Cat{
    constructor(firstName)
    {
        this.firstName=firstName

    }
    static getRandomCat(){
        console.log("this is:",this)
    }

    dance(style="tango"){
        return `${this.firstName} is dancing ${style}`
    }
    
}

const blue = new Cat('Blue')
blue.dance()