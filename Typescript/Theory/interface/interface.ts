interface Product {
    id:number;
    name:string;
    price:number;
    description?:string; // optional property
}

const product1:Product={
    id:1,
    name:"Laptop",
    price:1000
}

const product2:Product={
    id:2,
    name:"Smartphone",
    price:700,
    description:"A high-end smartphone"
}