/**
 * @param {string[]} details
 * @return {number}
 */
var countSeniors = function (details) {
  let output = 0;

  // we know that each age starts at the 11th index
  // so taking indexes 11 & 12 will return us their full age
  // we can then compare that to 60

  for (let i = 0; i < details.length; i++) {
    let age = parseInt(details[i].substring(11, 13));
    if (age > 60) output += 1;
  }

  return output;
};

module.exports = countSeniors;
