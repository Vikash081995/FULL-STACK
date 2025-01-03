const student={
    firstName:"John",
    lastname:'Doe',
    strengths:['Music','Art'],
    exams:{
        midterm:80,
        final:'90'
    }
}

console.log(student.exams.midterm+student.exams.final);//8090


//=========================================================
const shoppingCart=[
    {
        product:'shirt',
        price:20,
        quantity:2
    },
    {
        product:'pants',
        price:30,
        quantity:1
    },
    {
        product:'shoes',
        price:40,
        quantity:1
    }
]
console.log(shoppingCart[0].price*shoppingCart[0].quantity);//40