//basic closure

function outerFunction() {
  const outerVariable = "I am from outer function";
  return function InnerFunction() {
    console.log(outerVariable);
  };
}

const Inner = outerFunction();
Inner(); //I am from outer function

//=====================================================
// Private variables
function createPrivateVariables() {
  let privateVariable = 0;
  return {
    get: function () {
      return privateVariable;
    },
    set: function (value) {
      privateVariable = value;
    },
  };
}

const privateVar = createPrivateVariables();
console.log(privateVar.get()); // 0
privateVar.set(10);
console.log(privateVar.get()); // 10
//=====================================================

function createCounter() {
  let count = 0;

  return {
    increment: function () {
      count++;
    },
    decrement: function () {
      count--;
    },
    getCount: function () {
      return count;
    },
  };
}

const counter = createCounter();
counter.increment();
console.log(counter.getCount());
counter.decrement();
console.log(counter.getCount());
//=======================================================
//Factory function
function createPerson(name, age) {
  return {
    name: name,
    age: age,
    greet: function () {
      console.log(
        `Hello, my name is ${this.name} and I am ${this.age} years old.`
      );
    },
  };
}
const person1 = createPerson("John", 20);
person1.greet();
const person2 = createPerson("Jane", 25);
person2.greet();
//=======================================================
//counter
const addCounter = () => {
  let count = 0;
  return () => {
    count++;
    console.log(count);
  };
};

const counter1 = addCounter();
counter1(); //1
counter1(); //2
counter1(); //3
//=======================================================
//Event Handler
function addClickHandler(button) {
  let clickCount = 0;
  button.addEventListener("click", () => {
    clickCount++;
    console.log(clickCount);
  });
}

const button = document.createElement("button");
document.body.appendChild(button);
addClickListener(button);
//=======================================================
//closure in loops fixing var issues

for (var i = 0; i <= 3; i++) {
  setTimeout(() => {
    console.log(i); // All logs "4" because `var` is function-scoped
  }, 1000);
}

// Fix using a closure
for (var i = 0; i <= 3; i++) {
  (function (index) {
    setTimeout(() => {
      console.log(index); // Logs 0, 1, 2, 3
    }, 1000);
  })(i);
}

//=======================================================
//Memoization
function memoized() {
  let cache = {};
  return function (n) {
    if (n in cache) {
      console.log("Fetching from cache", n);
      return cache[n];
    } else {
      console.log("Calculating result", n);
      let result = n + 10;
      cache[n] = result;
      return result;
    }
  };
}

const addTen = memoized();
console.log(addTen(5)); //// Computing result for: 5 → Output: 15
console.log(addTen(5)); // Fetching from cache for: 5 → Output: 15
//=======================================================

function makeArmy() {
  let shooters = [];
  for (let i = 0; i < 10; i++) {
    const shooter = () => {
      console.log(i);
    };
    shooters.push(shooter);
  }
  return shooters;
}
