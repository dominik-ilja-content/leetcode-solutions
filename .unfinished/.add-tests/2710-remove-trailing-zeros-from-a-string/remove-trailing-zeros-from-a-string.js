/**
 * @param {string} num
 * @return {string}
 */
var removeTrailingZeros = function (num) {
  let lastTrailingIdx = -1;

  for (let i = num.length - 1; i >= 0; i--) {
    if (num[i] === "0") {
      lastTrailingIdx = i;
    } else {
      break;
    }
  }

  return lastTrailingIdx === -1 ? num : num.substring(0, lastTrailingIdx);
};

module.exports = removeTrailingZeros;
