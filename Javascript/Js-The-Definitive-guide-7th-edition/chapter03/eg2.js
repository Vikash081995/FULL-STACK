Math.cbrt(27);
// => 3: cube root

Math.hypot(3, 4);
// => 5: square root of sum of squares of all arguments

Math.log10(100);
// => 2: Base-10 logarithm

Math.log2(1024);
// => 10: Base-2 logarithm

Math.log1p(x);
// Natural log of (1+x); accurate for very small x

Math.expm1(x);
// Math.exp(x)-1; the inverse of Math.log1p()

Math.sign(x);
// -1, 0, or 1 for arguments <, ==, or > 0

Math.imul(2, 3);
// => 6: optimized multiplication of 32-bit integers

Math.clz32(0xf);
// => 28: number of leading zero bits in a 32-bit integer

Math.trunc(3.9);
// => 3: convert to an integer by truncating fractional part

Math.fround(x);
// Round to nearest 32-bit float number

Math.sinh(x);
// Hyperbolic sine. Also Math.cosh(), Math.tanh()

Math.asinh(x);
// Hyperbolic arcsine. Also Math.acosh(), Math.atanh()
