/* Bubble Sort */
/**
 * @param {number[][]} score
 * @param {number} k
 * @return {number[][]}
 */
var sortTheStudents = function (score, k) {
  for (let i = 0; i < score.length; i++) {
    for (let j = i + 1; j < score.length; j++) {
      if (score[i][k] < score[j][k]) {
        let temp = score[j];
        score[j] = score[i];
        score[i] = temp;
      }
    }
  }

  return score;
};

/* Built in sort */
/**
 * @param {number[][]} score
 * @param {number} k
 * @return {number[][]}
 */
var sortTheStudents = function (score, k) {
  return score.sort((a, b) => b[k] - a[k]);
};

/* Merge sort */

function merge(arr1, arr2) {}

/**
 * @param {number[][]} score
 * @param {number} k
 * @return {number[][]}
 */
var sortTheStudents = function (score, k) {
  return score.sort((a, b) => b[k] - a[k]);
};

module.exports = sortTheStudents;
