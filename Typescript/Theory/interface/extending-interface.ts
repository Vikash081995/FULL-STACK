interface Person{
    name:string;
}

interface Employee extends Person{
    salary:number;
}

const emp :Employee={
    name:"John Doe",
    salary:50000
}