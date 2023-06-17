/**
 * @param {string} s
 * @return {number}
 */
var minLength = function (s) {
  if (s.length < 2) return s.length;

  const stack = [s[0]];

  for (let i = 1; i < s.length; i++) {
    if (
      (stack.length > 0 && stack[stack.length - 1] === "A" && s[i] === "B") ||
      (stack[stack.length - 1] === "C" && s[i] === "D")
    ) {
      stack.pop();
    } else {
      stack.push(s[i]);
    }
  }

  return stack.length;
};

module.exports = minLength;
