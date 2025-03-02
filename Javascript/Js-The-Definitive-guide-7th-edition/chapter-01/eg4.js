const plus1 = (x) => x + 1;
// The input x maps to the output x + 1

const square = (x) => x * x;
// The input x maps to the output x * x

plus1(y); // => 4: function invocation is the same

square(plus1(y)); // => 16
