var a = "global";

function foo() {
  var a = "local";
  console.log("inside a" + a); //inside a local
}
foo();
console.log("outside a=" + a); //outside a=global
