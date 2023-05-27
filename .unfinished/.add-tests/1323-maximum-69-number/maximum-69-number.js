/**
 * @param {number} num
 * @return {number}
 */
var maximum69Number = function (num) {
  const numStr = num.toString();
  let output = "";
  let convertedSix = false;

  for (let i = 0; i < numStr.length; i++) {
    const digit = numStr[i];
    if (digit === "6" && !convertedSix) {
      output += "9";
      convertedSix = true;
    } else {
      output += digit;
    }
  }

  return parseInt(output);
};

module.exports = maximum69Number;
