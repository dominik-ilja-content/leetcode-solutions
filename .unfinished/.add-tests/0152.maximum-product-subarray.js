/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
  if (nums.length === 1) return nums[0];

  let result = nums[0],
    curMin = 1,
    curMax = 1;

  for (let i = 0; i < nums.length; i++) {
    let n = nums[i];

    if (n === 0 && i + 1 < nums.length) {
      curMin = curMax = 1;
    }

    let temp = curMax * n;
    curMax = Math.max(temp, n * curMin, n);
    curMin = Math.min(temp, n * curMin, n);
    result = Math.max(result, curMax);
  }

  return result;
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
  let product = nums[0];
  let max = product;

  for (let i = 1; i < nums.length; i++) {
    let num = nums[i];

    if (product === 0 || product < num) {
      product = num;
    } else {
      product = product * num;
    }

    if (product > max) max = product;
  }

  return max;
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
  let max = nums[0];

  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];
    let product = num;

    if (num > max) max = num;

    for (let j = i + 1; j < nums.length; j++) {
      product *= nums[j];
      if (product > max) max = product;
    }
  }

  return max;
};

console.log(maxProduct([2, 3, -2, 4])); // 6
console.log(maxProduct([-2, 0, -1])); // 0
console.log(maxProduct([-2, 0, 0, 0, 0, 1])); // 1
console.log(maxProduct([0, 2])); // 2
console.log(maxProduct([-2, 3, -4])); // 24
console.log(maxProduct([3, -1, 4])); // 4
console.log(maxProduct([2, 3, -2, 4])); // 6
