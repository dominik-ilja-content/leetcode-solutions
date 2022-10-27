const { TreeNode } = require("../data-structures/Trees");

/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function (nums) {
  function convert(start, end) {
    if (start > end) return null;

    const mid = Math.ceil((start + end) / 2);
    const root = new TreeNode(nums[mid]);
    root.left = convert(start, mid - 1);
    root.right = convert(mid + 1, end);

    return root;
  }

  return convert(0, nums.length - 1);
};

const space = "  ";
console.log(JSON.stringify(sortedArrayToBST([3, 1]), null, space));
//   1
// 3
//
//
// {
//   "val": 1,
//   "left": {
//     "val": 3,
//     "left": null,
//     "right": null
//   },
//   "right": null
// }
console.log(JSON.stringify(sortedArrayToBST([0, 1, 2, 3, 4, 5]), null, space));
//       3
//   1       5
// 0   2   4
//
//
// {
//   "val": 3,
//   "left": {
//     "val": 1,
//     "left": {
//       "val": 0,
//       "left": null,
//       "right": null
//     },
//     "right": {
//       "val": 2,
//       "left": null,
//       "right": null
//     }
//   },
//   "right": {
//     "val": 5,
//     "left": {
//       "val": 4,
//       "left": null,
//       "right": null
//     },
//     "right": null
//   }
// }
console.log(JSON.stringify(sortedArrayToBST([-10, -3, 0, 5, 9]), null, space));
//       0
//   -3    5
// -10       9
//
//
// {
//   "val": 0,
//   "left": {
//     "val": -3,
//     "left": {
//       "val": -10,
//       "left": null,
//       "right": null
//     },
//     "right": null
//   },
//   "right": {
//     "val": 9,
//     "left": {
//       "val": 5,
//       "left": null,
//       "right": null
//     },
//     "right": null
//   }
// }
