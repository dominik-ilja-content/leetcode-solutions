/**
 * @param {number} columnNumber
 * @return {string}
 */
var convertToTitle = function (columnNumber) {
  const baseASCIICode = "A".charCodeAt(0);
  const baseNumber = 26;
  let output = "";

  while (columnNumber > 0) {
    columnNumber -= 1;
    const code = columnNumber % baseNumber;
    output = String.fromCharCode(baseASCIICode + code) + output;
    columnNumber = (columnNumber - code) / baseNumber;
  }

  return output;
};

module.exports = convertToTitle;
