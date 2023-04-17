/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function (n) {
  const digits = n.toString();
  let product = sum = parseInt(digits[0]);

  for (let i = 1, num; i < digits.length; i++) {
    num = parseInt(digits[i]);
    product *= i;
    sum += i;
  }

  return product - sum;
};
