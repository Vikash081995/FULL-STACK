import { expect, it } from "vitest";
import { add } from "./math";

it("should summarize all number values in an array", () => {
  //Arrange
  const result = add([1, 2, 3, 4, 5]);
  expect(result).toBe(15);
});

it("should yield NaN if at least one invalid number is provided", () => {
  const result = add([1, 2, "invalid"]);
  expect(result).toBeNaN();
});

it("should yield a correct sum if an array of numeric string values is provided", () => {
  const result = add(["1", "2", "3"]);
  expect(result).toBe(6);
});

it("should yield 0 if an empty array is provided", () => {
  const result = add([]);
  expect(result).toBe(0);
});

it("should throw an error if no value is passed into the function", () => {
  const resultFn = () => {
    add();
  };
  expect(resultFn).toThrow(/is not iterable/);
});

it("should throw an error if provided with multiple arguments instead of an array", () => {
  const num1 = 1;
  const num2 = 2;
  const resultFn = () => {
    add(num1, num2);
  };
  expect(resultFn).toThrow();
});
