/**
 * @param {number} num
 * @return {number}
 */
var minimumSum = function (num) {
  // order the digits
  const nums = num.toString().split("").sort();

  let total = 0;
  for (let i = 0; i < nums.length / 2; i++) {
    total += parseInt(nums[i] + nums[i + 2]);
  }

  return total;
};

