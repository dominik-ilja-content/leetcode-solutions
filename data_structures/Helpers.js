const util = require("util");
const fs = require("fs");

function printObj(obj) {
  console.log(util.inspect(obj, { depth: null, colors: true, compact: false }));
}

/**
 * @desc Writes data to a file
 * @param {string} path path to the file to be written to
 * @param {any} data data that will be written to file
 */
function writeToFile(path, data) {
  try {
    console.log({ path, data });
    fs.writeFileSync(path, JSON.stringify(data));
    console.log("Data written to file!");
  } catch (error) {
    console.error(error);
  }
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
 * @param {Array[]} arr items An array containing the items.
 * @returns {Array[]} passed array with shuffled values
 */
function shuffle(arr) {
  var j, x, i;
  for (i = arr.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    x = arr[i];
    arr[i] = arr[j];
    arr[j] = x;
  }
  return arr;
}

/**
 * @param {number} amount items to create
 * @param {boolean} asc If items should be in ascending order or not
 * @returns {number[]}
 */

function generateSortedItemArray(amount, asc = true) {
  const result = [];

  for (let i = 0; i < amount; i++) {
    result.push(i + 1);
  }

  return result;
}

/**
 * @desc Generates a number array with values shuffled
 * @param {number} amount items to create
 * @returns {number[]}
 */

function generateShuffledArray(amount) {
  return shuffle(generateSortedItemArray(amount));
}

/**
 * @desc Generates a number and null array where each index alternates between
 *       number and null. This is used to create deep lopsided trees.
 * @param {number} amount items to create
 * @return {[number|null]}
 */

function generateAlternatingArray(amount) {
  const arr = [];
  let count = 0;
  let el = null;

  for (let i = 0; i < amount; i++) {
    if (el === null) {
      el = count;
      count += 1;
    } else {
      el = null;
    }

    arr.push(el);
  }

  return arr;
}

/**
 * @desc Generates a matrix with random values between 1 & the col amount (inclusive)
 * @param {number} rows number of rows to generate
 * @param {number} cols number of cols to generate
 * @return {[[number]]|[[]]}
 */

function generateRandomMatrix(rows, cols) {
  if (rows < 1 || cols < 1) return [[]];

  const matrix = [];

  for (let rowIdx = 0; rowIdx < rows; rowIdx++) {
    matrix.push(generateShuffledArray(cols));
  }

  return matrix;
}

function generateArrayOfRandomNumbersInRange(indexes, smallest, largest) {
  let nums = [];
  for (let i = 0; i < indexes; i++) {
    const randomNumber = generateRandomNumber(smallest, largest, {
      round: true,
      place: 0,
    });
    nums.push(randomNumber);
  }
  return nums;
}

module.exports = {
  generateArrayOfRandomNumbersInRange,
  generateAlternatingArray,
  generateRandomNumber,
  generateShuffledArray,
  generateSortedItemArray,
  generateRandomMatrix,
  printObj,
  shuffle,
  writeToFile,
};
