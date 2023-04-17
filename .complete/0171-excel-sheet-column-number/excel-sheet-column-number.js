/*
    Things to note:
      - The position of the character
      - The character value
*/

/* Iterative */

/**
 * @param {string} columnTitle
 * @return {number}
 */
var titleToNumber = function (columnTitle) {
  const inputLength = columnTitle.length;
  const lettersInAlphabet = 26;
  const charCodeBeforeCapitalA = "A".charCodeAt(0) - 1;
  let total = 0;

  for (let i = 0; i < inputLength; i++) {
    const letterValue = columnTitle.charCodeAt(i) - charCodeBeforeCapitalA;
    const letterPower = inputLength - i - 1;
    const multiplier = lettersInAlphabet ** letterPower;

    total += multiplier * letterValue;
  }

  return total;
};

/* Recursive */

/**
 * @param {string} columnTitle
 * @return {number}
 */
var titleToNumber = function (columnTitle) {
  const inputLength = columnTitle.length;
  const lettersInAlphabet = 26;
  const charCodeBeforeCapitalA = "A".charCodeAt(0) - 1;

  function traverse(index, total) {
    if (index >= inputLength) return total;

    const letterValue = columnTitle.charCodeAt(index) - charCodeBeforeCapitalA;
    const letterPower = inputLength - index - 1;
    const multiplier = lettersInAlphabet ** letterPower;
    const callTotal = multiplier * letterValue;

    return traverse(index + 1, total + callTotal);
  }

  return traverse(0, 0);
};

module.exports = titleToNumber;
