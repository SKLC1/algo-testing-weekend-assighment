const { test, expect } = require("@jest/globals");
const isValid = require("./validParentheses.easy");

test('Example 1', () => {
  expect(isValid('()')).toBe(true);
})
test('Example 1', () => {
  expect(isValid('()[]{}')).toBe(true);
})
test('Example 3', () => {
  expect(isValid('(]')).toBe(false);
})