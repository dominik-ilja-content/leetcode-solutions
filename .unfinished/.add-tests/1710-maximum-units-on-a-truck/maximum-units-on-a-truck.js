/**
 * @param {number[][]} boxTypes
 * @param {number} truckSize
 * @return {number}
 */
var maximumUnits = function (boxTypes, truckSize) {
  boxTypes.sort((a, b) => b[1] - a[1]);

  let sum = 0;
  let idx = 0;
  while (truckSize > 0 && idx < boxTypes.length) {
    let [boxes, multiplier] = boxTypes[idx];

    if (truckSize < boxes) {
      sum += truckSize * multiplier;
      truckSize -= truckSize;
    } else {
      sum += boxes * multiplier;
      truckSize -= boxes;
    }

    idx += 1;
  }
  return sum;
};

console.log(
  maximumUnits(
    [
      [1, 3],
      [2, 2],
      [3, 1],
    ],
    4
  )
);

/*
    We need to take the largest numberOfUnitsPerBox and all of them to the truck
    If we sort the array by the arr[i][1] position that'll put the largest size
    at the front
    We can then loop through normally and add units until we can't anymore
*/

module.exports = maximumUnits;
