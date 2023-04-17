/**
 * @param {number} n
 * @return {number}
 */
var numberOfMatches = function (n) {
  let teams = n, carry = 0, matches = 0;


  while (teams > 1) {
    if (teams % 2 !== 0) {
      teams -= 1;
      carry += 1;
    }

    matches += teams /= 2;
    teams += carry;
    carry = 0;
  }

  return matches;
};

/**
 * @param {number} n
 * @return {number}
 */
var numberOfMatches = function (n) {
  let teams = n, matches = 0;

  while (teams > 1) {
    if (teams % 2 == 0) {
      matches += teams / 2;
      teams /= 2;
    } else {
      matches += (teams - 1) / 2;
      teams = (teams + 1) / 2;
    }
  }

  return matches;
};

console.log(numberOfMatches(14));
console.log(numberOfMatches(5));
