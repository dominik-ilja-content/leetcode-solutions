/* 
A valid parentheses string is either empty "", "(" + A + ")", or A + B, where A and B are valid parentheses strings, and + represents string concatenation.

    For example, "", "()", "(())()", and "(()(()))" are all valid parentheses strings.

A valid parentheses string s is primitive if it is nonempty, and there does not exist a way to split it into s = A + B, with A and B nonempty valid parentheses strings.

Given a valid parentheses string s, consider its primitive decomposition: s = P1 + P2 + ... + Pk, where Pi are primitive valid parentheses strings.

Return s after removing the outermost parentheses of every primitive string in the primitive decomposition of s.

 

Example 1:

Input: s = "(()())(())"
Output: "()()()"
Explanation: 
The input string is "(()())(())", with primitive decomposition "(()())" + "(())".
After removing outer parentheses of each part, this is "()()" + "()" = "()()()".

Example 2:

Input: s = "(()())(())(()(()))"
Output: "()()()()(())"
Explanation: 
The input string is "(()())(())(()(()))", with primitive decomposition "(()())" + "(())" + "(()(()))".
After removing outer parentheses of each part, this is "()()" + "()" + "()(())" = "()()()()(())".

Example 3:

Input: s = "()()"
Output: ""
Explanation: 
The input string is "()()", with primitive decomposition "()" + "()".
After removing outer parentheses of each part, this is "" + "" = "".

 

Constraints:

    1 <= s.length <= 105
    s[i] is either '(' or ')'.
    s is a valid parentheses string.


*/

/**
 * @param {string} s
 * @return {string}
 */
// var removeOuterParentheses = function (s) {
//   const outer = [];
//   let inner = [];
//   let result = '', opening = 0, closing = 0;

//   for (let i = 0; i < s.length; i++) {
//     const char = s[i];

//     if (char === '(') {
//       if (outer.length === 0) {
//         outer.push(char);
//       }
//       else {
//         inner.push(char);
//         opening += 1;
//       }
//     }
//     if (char === ')') {
//       if (inner.length === 0) {
//         outer.pop();
//       }
//       else {
//         inner.push(char);
//         closing += 1;
//       }
//       if (opening === closing) {
//         result += inner.join('');
//         inner = [];
//         opening = 0;
//         closing = 0;
//       }
//     }
//   }

//   return result;
// };

var removeOuterParentheses = function (s) {

  let stc = [];
  let ans = [];

  for (let i = 0; i < s.length; i++) {
    const char = s[i];

    if (char === "(") {
      stc.push(char);
      if (stc.length >= 2)
        ans.push(char);

    } else if (char === ")") {
      stc.pop();
      if (stc.length)
        ans.push(char);
    }
  }
  return (ans.join(""));

};

console.log(removeOuterParentheses("()")); // ""
console.log(removeOuterParentheses("(())((()))")); // ()(())
console.log(removeOuterParentheses("((()())(()()))")); // "(()())(()())"
