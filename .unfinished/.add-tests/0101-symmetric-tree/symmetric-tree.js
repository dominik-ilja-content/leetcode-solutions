const { createTree } = require("../0000-helpers/Trees");

/*
    left = els + lastLeftIdx | right = els * 2 + lastRightIdx

    left = 1 + 0 = 1 | right = 1 * 2 + 0 = 2
    left = 2 + 1 = 3 | right = 2 * 2 + 2 = 6
    left = 4 + 3 = 7 | right = 4 * 2 + 6 = 14

    right - left + 1 | 0 - 0 + 1 = 1 | left = 0 + 1 = 1, right = 1 * 2 = 2
    2 - 1 + 1 = 2 | left = 1 + 2 = 3 | right = els * 2 + lastIdx (2 * 2 + 2) = 6


    look at values and see if the values match
        l  r
    [1, 2, 2, 3, 4, 4, 3, 5, 6, 7, 8, 8, 7, 6, 5]
    [1, 2, 2, 3, 4, 4, 3]
    0 0
    [1]
    1  2
    [2, 2]
    3        6
    [3, 4, 4, 3]
    7                    14
    [5, 6, 7, 8, 8, 7, 6, 5]

  */

// ATTEMPT ONE

// var isSymmetric = function (root) {
//   // traverse each tree node and retrieve the values
//   const nodes = [];
//   const queue = [root];

//   while (queue.length > 0) {
//     const node = queue.shift();

//     if (node !== null) {
//       nodes.push(node.val);
//       queue.push(node.left);
//       queue.push(node.right);
//     }
//   }

//   function compare(leftIdx, rightIdx) {
//     if (rightIdx >= nodes.length) return false;

//     // assign values of leftIdx & rightIdx
//     const els = rightIdx - leftIdx + 1;
//     let left = leftIdx;
//     let right = rightIdx;
//     let same = true;

//     // compare the ends of the array to see if "tree row" is symmetrical
//     while (left <= right) {
//       if (nodes[left] !== nodes[right]) {
//         same = false;
//         break;
//       }

//       left += 1;
//       right -= 1;
//     }

//     // we're at the last part of the array so we shouldn't do another call
//     // to prevent us from returning false. If same is false we don't need to check further
//     if (rightIdx === nodes.length - 1 || !same) {
//       return same;
//     } else {
//       return same && compare(els + leftIdx, els * 2 + rightIdx);
//     }
//   }
//   return compare(0, 0);
// };

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function (root) {
  function compare(n1, n2) {
    if (n1 === null && n2 === null) return true;
    if (n1 === null || n2 === null) return false;

    if (n1.val === n2.val) {
      return compare(n1.left, n2.right) && compare(n1.right, n2.left);
    } else {
      return false;
    }
  }

  return compare(root.left, root.right);
};

module.exports = isSymmetric;

// console.log(isSymmetric(createTree([1])));
console.log(isSymmetric(createTree([1, 2, 2, null, 3, null, 3]))); // false
console.log(isSymmetric(createTree([1, 2, 2, 3, 4, 4, 3]))); // true
