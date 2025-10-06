function grumps() {
  console.log("Grumps!");
}

grumps();

for (let i = 0; i < 10; i++) {
  grumps();
}
//=============================================
function rollDie() {
  let roll = Math.floor(Math.random() * 6) + 1;
  console.log(roll);
}
// ==============================================
function greet(firstName, lastName) {
  console.log(`Hey there, ${firstName} ${lastName}!`);
}
greet("Chris", "Fischer"); //Hey there, Chris Fischer!

// ==============================================
function throwDice(numRolls) {
  for (let i = 0; i < numRolls; i++) {
    rollDie();
  }
}
throwDice(10); //rolls 10 times

// ==============================================
