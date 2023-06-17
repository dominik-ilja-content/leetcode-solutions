function getTypedString(str) {
  const stack = [];

  for (let i = 0; i < str.length; i++) {
    if (str[i] === "#") {
      stack.pop();
    } else {
      stack.push(str[i]);
    }
  }

  return stack.join("");
}

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function (s, t) {
  return getTypedString(s) === getTypedString(t);
};

module.exports = backspaceCompare;
