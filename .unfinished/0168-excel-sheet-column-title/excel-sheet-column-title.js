/**
 * @param {number} columnNumber
 * @return {string}
 */
var convertToTitle = function (columnNumber) {
  if (columnNumber === 0) return "";

  return convertToTitle(--columnNumber / 26) +
};

module.exports = convertToTitle;
