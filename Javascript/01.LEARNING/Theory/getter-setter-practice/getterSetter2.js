class User {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  set fullName(newName) {
    const [first, last] = newName.split(" ");
    this.firstName = first;
    this.lastName = last;
  }
}

const userName = new User("John","Smith");
console.log(userName.fullName);
userName.fullName = "Cherilyn Sarkisian";
console.log(userName.fullName);