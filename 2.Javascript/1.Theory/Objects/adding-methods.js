const math = {
  numbers: [1, 2, 3, 4, 5, 6],
  add: function (x, y) {
    return x + y;
  },
  multiply: function (x, y) {
    return x * y;
  },
};

console.log(math);
console.log(math.add(5, 6)); //11
console.log(math.multiply(5, 6)); //30
//==============================================
//Shorthand

const auth ={
    username:'John',
    login(){
        console.log('login')
    },
    logout(){
        console.log('logout')
    }
}

auth.login();
auth.logout();
