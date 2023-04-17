function swap(arr, idx1, idx2) {
  const temp = arr[idx1];
  arr[idx1] = arr[idx2];
  arr[idx2] = temp;
}

/**
 * @param {string[]} names
 * @param {number[]} heights
 * @return {string[]}
 */
var sortPeople = function (names, heights) {
  // bubble sort, but the smaller numbers bubble up
  for (let i = 0; i < names.length; i++) {
    let swapped = false;
    for (let j = 0, next = j + 1; j < names.length - 1; j++, next++) {
      if (heights[next] > heights[j]) {
        swapped = true;
        swap(heights, j, next);
        swap(names, j, next);
      }
    }

    if (!swapped) break;
  }

  return names;
};

let names = ["Mary", "John", "Emma"];
// let heights = [180, 172, 170];
let heights = [180, 162, 170];
let result = sortPeople(names, heights);
console.log(result);

module.exports = sortPeople;
