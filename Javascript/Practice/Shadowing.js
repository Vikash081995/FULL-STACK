var a = "global";

function foo() {
  var a = "local";
  console.log("inside a" + a); //insidelocal
}
foo();
console.log("outside a=" + a); //outside a=global
