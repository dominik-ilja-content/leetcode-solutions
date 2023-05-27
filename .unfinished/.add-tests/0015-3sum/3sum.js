/* Brute Force */
function doArraysHaveSameValues(arr1, arr2) {
  const valueMap = {};

  for (let i = 0; i < arr1.length; i++) {
    if (valueMap[arr1[i]] !== undefined) {
      valueMap[arr1[i]] += 1;
    } else {
      valueMap[arr1[i]] = 1;
    }
  }
  for (let i = 0; i < arr2.length; i++) {
    if (valueMap[arr2[i]] !== undefined) {
      valueMap[arr2[i]] -= 1;
    } else {
      valueMap[arr2[i]] = -1;
    }
  }

  const values = Object.values(valueMap);
  for (let i = 0; i < values.length; i++) {
    if (values[i] !== 0) {
      return false;
    }
  }

  return true;
}

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  const output = [];
  const triplet = [];

  for (let i = 0; i < nums.length - 2; i++) {
    const numI = nums[i];
    for (let j = i + 1; j < nums.length - 1; j++) {
      const numJ = nums[j];
      for (let k = j + 1; k < nums.length; k++) {
        const numK = nums[k];
        if (numI + numJ + numK === 0) {
          let isValidTriplet = true;
          triplet[0] = numI;
          triplet[1] = numJ;
          triplet[2] = numK;

          for (let l = 0; l < output.length; l++) {
            if (doArraysHaveSameValues(triplet, output[l])) {
              isValidTriplet = false;
              break;
            }
          }

          if (isValidTriplet) {
            output.push([...triplet]);
          }
        }
      }
    }
  }

  return output;
};

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  const targetSum = 0;
  const output = [];
  nums.sort((a, b) => a - b); // sort in ascending order

  for (let i = 0; i < nums.length - 2; i++) {
    // move i to prevent duplicates from being pushed
    if (nums[i] === nums[i - 1]) continue;

    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];

      if (sum === targetSum) {
        output.push([nums[i], nums[left], nums[right]]);
        left += 1;

        // move left to prevent duplicates from being pushed
        while (nums[left] === nums[left - 1] && left < right) {
          left += 1;
        }
      } else if (sum < 0) {
        left += 1;
      } else {
        right -= 1;
      }
    }
  }

  return output;
};

console.log(threeSum([-1, 0, 1]));
console.dir(
  threeSum([
    8, 5, 12, 3, -2, -13, -8, -9, -8, 10, -10, -10, -14, -5, -1, -8, -7, -12, 4,
    4, 10, -8, 0, -3, 4, 11, -9, -2, -7, -2, 3, -14, -12, 1, -4, -6, 3, 3, 0, 2,
    -9, -2, 7, -8, 0, 14, -1, 8, -13, 10, -11, 4, -13, -4, -14, -1, -8, -7, 12,
    -8, 6, 0, -15, 2, 8, -4, 11, -4, -15, -12, 5, -9, 1, -2, -10, -14, -11, 4,
    1, 13, -1, -3, 3, -7, 9, -4, 7, 8, 4, 4, 8, -12, 12, 8, 5, 5, 12, -7, 9, 4,
    -12, -1, 2, 5, 4, 7, -2, 8, -12, -15, -1, 2, -11,
  ]),
  { maxArrayLength: null }
);
console.log(threeSum([-3, 3, 4, -3, 1, 2])); // [-3, -3, 1, 2, 3, 4]
console.log(threeSum([-2, 0, 2, -2, 2, 0])); // [-2, -2, 0, 0, 2, 2]
