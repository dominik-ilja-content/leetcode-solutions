function sumXORRange(arr, start, end) {
  if (end - start === 0) return arr[start];

  let sum = arr[start];

  for (let i = start + 1; i <= end; i++) {
    sum ^= arr[i];
  }

  return sum;
}

/**
 * @param {number[]} arr
 * @return {number}
 */
var countTriplets = function (arr) {
  let matches = 0;
  let i = 0;

  while (i < arr.length - 1) {
    let j = i + 1;
    while (j < arr.length) {
      let k = j;
      while (k < arr.length) {
        let a = sumXORRange(arr, i, j - 1);
        let b = sumXORRange(arr, j, k);
        if (a === b) matches += 1;
        k += 1;
      }
      j += 1;
    }
    i += 1;
  }

  return matches;
};

module.exports = countTriplets;
