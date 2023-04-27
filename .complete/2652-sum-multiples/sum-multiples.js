/**
 * @param {number} n
 * @return {number}
 */
var sumOfMultiples = function (n) {
  const multiples = [3, 5, 7];
  let sum = 0;

  for (let i = 0; i <= n; i++) {
    for (let j = 0; j < multiples.length; j++) {
      const multiple = multiples[j];

      if (i % multiple === 0) {
        sum += i;
        break;
      }
    }
  }

  return sum;
};

module.exports = sumOfMultiples;
