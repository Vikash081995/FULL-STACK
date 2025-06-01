function Dog(name,bread){
    console.log(this);
    this.name= name;
    this.bread=bread
}

function User(username,email){
    this.username = username;
    this.email = email;
    this.isAdmin = false
}

Dog("Watt","Lab")