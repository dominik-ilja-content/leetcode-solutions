function freqCount(arr) {
  const map = {};

  for (let i = 0; i < arr.length; i++) {
    if (map[arr[i]] !== undefined) {
      map[arr[i]] += 1;
    } else {
      map[arr[i]] = 1;
    }
  }

  return map;
}

function getUniqueValues(arr, map) {
  const set = new Set();

  for (let i = 0; i < arr.length; i++) {
    if (map[arr[i]] === undefined) {
      set.add(arr[i]);
    }
  }

  return [...set];
}

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function (nums1, nums2) {
  const output = [];
  const nums1Freq = freqCount(nums1);
  const nums2Freq = freqCount(nums2);

  output.push(getUniqueValues(nums1, nums2Freq));
  output.push(getUniqueValues(nums2, nums1Freq));

  return output;
};

module.exports = findDifference;
