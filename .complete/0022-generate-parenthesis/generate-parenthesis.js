/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  const validParenthesis = [];

  function generate(parenthesis, openingParens, closingParens) {
    if (openingParens === n && closingParens === n) {
      validParenthesis.push(parenthesis);
    }
    if (openingParens < n) {
      generate(parenthesis + "(", openingParens + 1, closingParens);
    }
    if (closingParens < openingParens) {
      generate(parenthesis + ")", openingParens, closingParens + 1);
    }
  }
  generate("", 0, 0);

  return validParenthesis;
};

module.exports = generateParenthesis;
