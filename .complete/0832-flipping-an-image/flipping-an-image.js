function invert(num) {
  return num === 0 ? 1 : 0;
}

/**
 * @param {number[][]} image
 * @return {number[][]}
 */
var flipAndInvertImage = function (image) {
  for (let i = 0; i < image.length; i++) {
    const row = image[i];
    let left = 0;
    let right = row.length - 1;

    while (left <= right) {
      const temp = invert(row[left]);
      row[left] = invert(row[right]);
      row[right] = temp;

      left += 1;
      right -= 1;
    }
  }

  return image;
};

module.exports = flipAndInvertImage;
