/**
 * @param {number} num
 * @return {number}
 */
var countDigits = function (num) {
  const numberAsString = num.toString();
  let divisibleDigits = 0;

  for (let i = 0; i < numberAsString.length; i++) {
    const currentDigit = parseInt(numberAsString[i]);

    if (currentDigit !== 0 && num % currentDigit === 0) {
      divisibleDigits += 1;
    }
  }

  return divisibleDigits;
};

module.exports = countDigits;
