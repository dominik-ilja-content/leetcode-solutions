/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function (image, sr, sc, color) {
    const target = image[sr][sc];
    const visited = new Map();
    function traverse(row, col) {
        visited.set(`${row},${col}`, true);

        if (image[row][col] === target) {
            image[row][col] = color;
        }

        if (
            col - 1 >= 0 &&
            image[row][col - 1] === target &&
            !visited.has(`${row},${col - 1}`)
        ) {
            traverse(row, col - 1);
        }
        if (
            row - 1 >= 0 &&
            image[row - 1][col] === target &&
            !visited.has(`${row - 1},${col}`)
        ) {
            traverse(row - 1, col);
        }
        if (
            col + 1 < image[row].length &&
            image[row][col + 1] === target &&
            !visited.has(`${row},${col + 1}`)
        ) {
            traverse(row, col + 1);
        }
        if (
            row + 1 < image.length &&
            image[row + 1][col] === target &&
            !visited.has(`${row + 1},${col}`)
        ) {
            traverse(row + 1, col);
        }
    }
    traverse(sr, sc);
    return image;
};

floodFill([[1, 1, 1], [1, 1, 0], [1, 0, 1]], 1, 1, 2);

module.exports = floodFill;