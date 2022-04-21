/**
 * @param {string} s
 * @return {number}
 * 
 * @description Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

Symbol       Value
I             1
V             5 
X             10
L             50
C             100
D             500
M             1000
For example, 2 is written as II in Roman numeral, just two one's added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

I can be placed before V (5) and X (10) to make 4 and 9. 
X can be placed before L (50) and C (100) to make 40 and 90. 
C can be placed before D (500) and M (1000) to make 400 and 900.
Given a roman numeral, convert it to an integer.



Example 1:

Input: s = "III"
Output: 3
Explanation: III = 3.
Example 2:

Input: s = "LVIII"
Output: 58
Explanation: L = 50, V= 5, III = 3.
Example 3:

Input: s = "MCMXCIV"
Output: 1994
Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.
 */

//! accidantly made a number to roman :(    leaving it here anyway , actual solution below.
// const romanToInt = function (s) {
//   let num = s.toString().split('').reverse();
//   console.log(num);
//   let ones = [];
//   let greeks = ['I','X','C','M'];
//   let greekfives = ['V','L','D'];
//   for (let i = 0; i < num.length; i++) {

//        if(num[i] > 5 && num[i] < 8) {
//         for(let l = 5; l < num[i] ; l++) { 
//           ones.push(greeks[i])
//         }
//         ones.push(greekfives[i])
//       } else if(num[i] >= 8) {
//         ones.push(greeks[i+1])
//         for(let k = 10; k > num[i] ; k--) { 
//           ones.push(greeks[i])
//         }
//       } else if(num[i] == 4) {
//         ones.push(greekfives[i])
//         ones.push(greeks[i])
//       } else {
//         for (let j = 0; j < num[i]; j++) {
//           ones.push(greeks[i])
//         }
//       }
//     }
//   return ones.reverse().join("")
// };
// console.log(romanToInt(1994));

// ! actual solution

const romanToInt = function (s) {
 let splitted = s.split('');
 let res = 0;
 const romans = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};
for (let i = 0; i < s.length; i++) {
  if (s[i] === "I" && s[i + 1] === "V") {
    res += 4;
    i++;
  } else if (s[i] === "I" && s[i + 1] === "X") {
    res += 9;
    i++;
  } else if (s[i] === "X" && s[i + 1] === "L") {
    res += 40;
    i++;
  } else if (s[i] === "X" && s[i + 1] === "C") {
    res += 90;
    i++;
  } else if (s[i] === "C" && s[i + 1] === "D") {
    res += 400;
    i++;
  } else if (s[i] === "C" && s[i + 1] === "M") {
    res += 900;
    i++;
  } else {
    res += romans[s[i]];
  }
}
return res;
}
console.log(romanToInt('LVIII'));
module.exports = romanToInt;