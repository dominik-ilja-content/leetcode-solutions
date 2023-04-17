/* Brute Force */
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var findMatrix = function (nums) {
  const matrix = [[]];

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];

    let numWasInserted = false;
    for (let m = 0; m < matrix.length; m++) {
      const row = matrix[m];

      let hasElement = false;
      for (let col = 0; col < row.length; col++) {
        if (row[col] === num) {
          hasElement = true;
          break;
        }
      }

      if (!hasElement) {
        row.push(num);
        numWasInserted = true;
        break;
      }
    }

    if (!numWasInserted) {
      matrix.push([num]);
    }
  }
  return matrix;
};

/* Hash Map with Maps */
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var findMatrix = function (nums) {
  const matrix = [[]];
  const map = { 0: {} };

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    let numWasInserted = false;

    for (let rowIdx = 0; rowIdx < matrix.length; rowIdx++) {
      const row = matrix[rowIdx];
      const rowMap = map[rowIdx];

      if (rowMap[num] === undefined) {
        rowMap[num] = true;
        numWasInserted = true;
        row.push(num);
        break;
      }
    }

    if (!numWasInserted) {
      matrix.push([num]);
      map[matrix.length - 1] = {
        [num]: true,
      };
    }
  }

  return matrix;
};

/* Array of Hash Maps */
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var findMatrix = function (nums) {
  const matrix = [[]];
  const maps = [{}];

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    let numWasInserted = false;

    for (let rowIdx = 0; rowIdx < matrix.length; rowIdx++) {
      const row = matrix[rowIdx];
      const rowMap = maps[rowIdx];

      if (rowMap[num] === undefined) {
        rowMap[num] = true;
        numWasInserted = true;
        row.push(num);
        break;
      }
    }

    if (!numWasInserted) {
      matrix.push([num]);
      maps[matrix.length - 1] = {
        [num]: true,
      };
    }
  }

  return matrix;
};

module.exports = findMatrix;
