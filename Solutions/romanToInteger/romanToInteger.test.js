const { test, expect } = require("@jest/globals");
const palindromeNumber = require("./romanToInteger.easy");

test("Example 1", () => {
	expect(palindromeNumber("III")).toBe(3);
});
test("Example 2", () => {
	expect(palindromeNumber("LVIII")).toBe(58);
});
test("Example 3", () => {
	expect(palindromeNumber("MCMXCIV")).toBe(1994);
});