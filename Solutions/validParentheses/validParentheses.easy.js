/**
 * @param {string} s
 * @return {boolean}
 * 
 * @description Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
 

Example 1:

Input: s = "()"
Output: true
Example 2:

Input: s = "()[]{}"
Output: true
Example 3:

Input: s = "(]"
Output: false
 */
const isValid = function (s) {
  let splitted = s.split('');
  let bool = false;
  let brackets = ['(',')','[',']','{','}']
  for(let i = 0; i < splitted.length; i++) {
      if(splitted[i] === '('){
      if(splitted[i]=== '(' && splitted[i+1] === ')') {
        bool = true
      } else {
        return false
      }
    }
      if(splitted[i] === '['){
      if(splitted[i]=== '[' && splitted[i+1] === ']') {
        bool = true
      } else {
        return false
      }
    }
      if(splitted[i] === '{'){
      if(splitted[i]=== '{' && splitted[i+1] === '}') {
        bool = true
      } else {
        return false
      }
    }
  }
  return bool
};
console.log(isValid("(]"));
module.exports = isValid;