function padStr(str, places, char) {
  let pad = "";
  for (let i = 0; i < places; i++) {
    pad += char;
  }
  return (pad += str);
}

/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function (x, y) {
  // gives us the binary representation of x and y, but without leading zeros
  let binaryX = x.toString(2);
  let binaryY = y.toString(2);

  if (binaryX.length < binaryY.length) {
    binaryX = padStr(binaryX, binaryY.length - binaryX.length, "0");
  } else if (binaryY.length < binaryX.length) {
    binaryY = padStr(binaryY, binaryX.length - binaryY.length, "0");
  }
  console.log({ binaryX, binaryY });

  let firstDiff = Infinity;
  let lastDiff = -Infinity;
  for (let i = 0; i < binaryX.length; i++) {
    if (binaryX[i] !== binaryY[i]) {
      if (i < firstDiff) {
        firstDiff = i;
      }
      if (i > lastDiff) {
        lastDiff = i;
      }
    }
  }

  return lastDiff - firstDiff === 0 ? 1 : lastDiff - firstDiff;
};

console.log(hammingDistance(1, 4)); // 2
console.log(hammingDistance(3, 1)); // 1
console.log(hammingDistance(4, 2)); // 1

module.exports = hammingDistance;
