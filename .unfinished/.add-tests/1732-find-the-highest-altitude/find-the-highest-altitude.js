/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function (gain) {
  let altitude = 0;
  let maxAltitude = 0;

  for (let i = 0; i < gain.length; i++) {
    altitude += gain[i];

    if (altitude > maxAltitude) maxAltitude = altitude;
  }

  return maxAltitude;
};

console.log(largestAltitude([-5, 1, 5, 0, -7])); // 1
console.log(largestAltitude([-4, -3, -2, -1, 4, 3, 2])); // 0

module.exports = largestAltitude;
