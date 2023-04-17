/*
    Hash Map
*/
/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function (jewels, stones) {
  const map = new Map();
  let count = 0;

  // store all jewels within map
  for (let i = 0; i < jewels.length; i++) {
    if (!map.has(jewels[i])) map.set(jewels[i], true);
  }

  // see if stones match jewels increment count if they do
  for (let i = 0; i < stones.length; i++) {
    if (map.has(stones[i])) count += 1;
  }

  return count;
};

/*
    Brute Force
*/
/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function (jewels, stones) {
  let count = 0;

  for (let i = 0; i < jewels.length; i++) {
    for (let j = 0; j < stones.length; j++) {
      if (jewels[i] === stones[j]) count += 1;
    }
  }

  return count;
};

module.exports = numJewelsInStones;
