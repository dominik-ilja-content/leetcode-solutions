/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicates = function (s) {
  if (s.length < 2) return s;

  const stack = [s[0]];

  for (let i = 1; i < s.length; i++) {
    if (stack.length > 0 && stack[stack.length - 1] === s[i]) {
      stack.pop();
    } else {
      stack.push(s[i]);
    }
  }

  return stack.join("");
};

module.exports = removeDuplicates;
