/**
 * @param {number} n
 * @return {string}
 */
var generateTheString = function (n) {
  let length = n;
  let evenNumber = false;
  let output = "";

  if (n % 2 === 0) {
    length = n - 1;
    evenNumber = true;
  }

  for (let i = 0; i < length; i++) {
    output += "a";
  }

  if (evenNumber) {
    output += "b";
  }

  return output;
};

/**
 * @param {number} n
 * @return {string}
 */
var generateTheString = function (n) {
  const output = Array(n).fill("a");

  if (n % 2 === 0) {
    output[output.length - 1] = "b";
  }

  return output.join("");
};

/**
 * @param {number} n
 * @return {string}
 */
var generateTheString = function (n) {
  let output = "";

  for (let i = 0; i < n - 1; i++) {
    output += "a";
  }

  if (n % 2 === 0) {
    output += "b";
  } else {
    output += "a";
  }

  return output;
};

module.exports = generateTheString;
