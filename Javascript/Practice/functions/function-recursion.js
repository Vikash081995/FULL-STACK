function countDown(n) {
  if (n < 0) {
    console.log("Countdown finished!");
  }
  console.log(n);
  countDown(n - 1); //recursively calling the function
}

countDown(10); //10,9,8,7,6,5,4,3,2,1,0
