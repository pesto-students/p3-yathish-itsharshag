const mathOperations = require("./index");
const { sum, diff, product } = mathOperations;

test("sum operation should work as expected", () => {
  expect(sum(0, 0)).toBe(0);
  expect(sum(1, 2)).toBe(3);
  expect(sum(-1, 1)).toBe(0);
  expect(sum(4, -5)).toBe(-1);
});

test("diff operation should work as expected", () => {
  expect(diff(0, 0)).toBe(0);
  expect(diff(1, 1)).toBe(0);
  expect(diff(4, 3)).toBe(1);
  expect(diff(1, -1)).toBe(2);
  expect(diff(-1, 1)).toBe(-2);
});

test("product operation should work as expected", () => {
  expect(product(0, 0)).toBe(0);
  expect(product(-1, -2)).toBe(2);
  expect(product(-1, 1)).toBe(-1);
  expect(product(4, 5)).toBe(20);
});
