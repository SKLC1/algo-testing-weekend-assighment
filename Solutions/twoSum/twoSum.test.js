const { test, expect } = require("@jest/globals");
const searchInsert = require("./twoSum.easy");

test('Example 1', () => {
  expect(searchInsert([2,7,11,15],9)).toStrictEqual([0,1]);
})
test('Example 2', () => {
  expect(searchInsert([3,2,4],6)).toStrictEqual([1,2]);
})
test('Example 3', () => {
  expect(searchInsert([3,3],6)).toStrictEqual([0,1]);
})