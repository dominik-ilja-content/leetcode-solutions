/**
 * @param {number[]} pref
 * @return {number[]}
 */
var findArray = function (pref) {
  const output = [pref[0]]; // ensured pref will have at least 1 item

  for (let i = 1; i < pref.length; i++) {
    output[i] = pref[i] ^ pref[i - 1];
  }

  return output;
};

module.exports = findArray;
