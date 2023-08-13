/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const map = {
    ")": "(",
    "}": "{",
    "]": "[",
  };
  const openingBraces = ["(", "{", "["];
  const stack = [];

  for (let char of s) {
    if (openingBraces.includes(char)) {
      stack.push(char);
    } else if (map[char] !== stack.pop()) {
      return false;
    }
  }

  return stack.length === 0;
};

module.exports = isValid;
