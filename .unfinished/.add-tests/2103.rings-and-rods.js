/**
 * @param {string} rings
 * @return {number}
 */
var countPoints = function (rings) {
  const stats = [];
  let points = 0;

  for (let i = 0; i < 10; i++) {
    stats.push(new Map);
  }

  for (let i = 0, idx, color, stat; i < rings.length; i += 2) {
    idx = rings[i + 1];
    color = rings[i];
    stat = stats[idx];

    if (!stat.has(color)) stat.set(color, true);

    if (stat.size === 3 && !stat.has('counted')) {
      stat.set('counted', true);
      points += 1;
    }
  }

  return points;
};

// console.log(countPoints("B0B6G0R6R0R6G9"));
console.log(countPoints("B7R5B3G5B1R2B8"));

// console.log(Object.keys.length);
