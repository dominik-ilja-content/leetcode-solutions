/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function (num) {
  const ROMAN = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  };
  let result = "";

  while (num > 0) {
    for (let key in ROMAN) {
      const value = ROMAN[key];

      if (num - value > -1) {
        result += key;
        num -= value;
        break;
      }
    }
  }

  return result;
};

console.log(intToRoman(1111));

module.exports = intToRoman;
