const { test, expect } = require("@jest/globals");
const searchInsert = require("./strStr.easy");

test('Example 1', () => {
  expect(searchInsert('hello','ll')).toBe(2);
})
test('Example 2', () => {
  expect(searchInsert('aaaaaa','bba')).toBe(-1);
})
test('Example 3', () => {
  expect(searchInsert('hello','')).toBe(0);
})
