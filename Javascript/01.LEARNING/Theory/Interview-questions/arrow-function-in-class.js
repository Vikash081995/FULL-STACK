const Person=function(name){
    this.name = name;
    this.sayName1 = function () {
      console.log(this.name);
    };
    this.sayName2=()=>{
        console.log(this.name)
    }
}

const john = new Person('John');
const dave = new Person('Dave')

john.sayName1() //John
john.sayName2() //John

john.sayName1.call(dave) //Dave
john.sayName2.call(dave) //John

//Arrow function does not have its own 'this', it takes 'this' from the surrounding context
//In this case, the surrounding context is the instance of the class (john), so it always refers to john's name

john.sayName1.apply(dave) //Dave
john.sayName2.apply(dave) //John

john.sayName1.bind(dave)() //Dave
john.sayName2.bind(dave)() //John

const sayNameFromWindow1 = john.sayName1;
const sayNameFromWindow2 = john.sayName2;

sayNameFromWindow1() //undefined (in strict mode) or window.name (in non-strict mode)
sayNameFromWindow2() //John