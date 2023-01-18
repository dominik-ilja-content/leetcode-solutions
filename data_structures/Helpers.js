const util = require("util");

function printObj(obj) {
  console.log(util.inspect(obj, { depth: null, colors: true, compact: false }));
}

/**
 * @param {number} [min = 0] lowest number to be returned
 * @param {number} [max = 10] highest number to be returned
 * @param {object} [options = {round: false, place: null}] if we want to round number and to what place
 * @returns {number} number generated between min and max
 * @desc Generates a number between min and max. Is inclusive of min and max.
 */

function generateRandomNumber(
  min = 0,
  max = 10,
  options = { round: false, place: null }
) {
  if (min > max) throw new Error("min cannot be greater than max");

  let randomNum = Math.random() * (max - min) + min;
  const { round, place } = options;

  if (round && typeof place === "number") {
    if (options.place > 20) throw new Error("Place must be between 0 & 20");
    randomNum = +randomNum.toFixed(options.place);
  }
  return randomNum;
}

/**
 * Shuffles array in place.
 * @param {Array} a items An array containing the items.
 */
function shuffle(a) {
  var j, x, i;
  for (i = a.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    x = a[i];
    a[i] = a[j];
    a[j] = x;
  }
  return a;
}

/**
 * @param {number} amount items to create
 * @param {boolean} asc If items should be in ascending order or not
 */

function generateSortedItemArray(amount, asc = true) {
  const result = [];

  for (let i = 0; i < amount; i++) {
    result.push(i);
  }

  return result;
}

/**
 * @param {number} amount items to create
 */

function generateShuffledArray(amount) {
  return shuffle(generateSortedItemArray(amount));
}

module.exports = {
  generateRandomNumber,
  generateShuffledArray,
  generateSortedItemArray,
  printObj,
};
