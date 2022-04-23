/**
 * @param {string[]} strs
 * @return {string}
 *
 * @description {Write a function to find the longest common prefix string amongst an array of strings.
                If there is no common prefix, return an empty string "".}
 * 
 * Example 1 
 * Input: strs = ["flower","flow","flight"]
 * Output: "fl"
 * 
 *
 * Example 2
 * Input: strs = ["dog","racecar","car"]
 * Output: ""
 *
 */

const longestCommonPrefix = function (strs) {
  let match = [];
  let match2 = [];
  let word1 = strs[0].toString().split('')
  let word2 = strs[1].toString().split('')
  let word3 = strs[2].toString().split('')
  for (let i = 0; i < word1.length; i++) {
    if (word1[i] === word2[i]) {
      match.push(word1[i])
    }
  }
  for (let i = 0; i < match.length; i++) {
    if (word2[i] === word3[i]) {
      match2.push(word1[i])
    }
  }
  return match2.join('')
};
console.log(longestCommonPrefix(["flower","flow","flight"]));
console.log(longestCommonPrefix(["dog","racecar","car"]));
module.exports = longestCommonPrefix;
