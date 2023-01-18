const {
  TreeNode,
  createBinarySearchTree,
  createTree,
} = require("../../data_structures/Trees");
const { generateSortedItemArray } = require("../../data_structures/Helpers");

const sortedArrayToBST = require("./convert-sorted-array-to-binary-search-tree");

describe("tests for leetcode 108 - convert sorted array to binary search tree", () => {
  test("should create a valid bst for a single value array", () => {
    const values = [1];
    const result = sortedArrayToBST(values);
    const expected = new TreeNode(1);

    expect(result).toEqual(expected);
  });
  test("should create a valid bst for a two value array", () => {
    const values = [1, 3];
    const result = sortedArrayToBST(values);
    const expected = [
      createBinarySearchTree([1, 3]),
      createBinarySearchTree([3, 1]),
    ];

    expect(result).toBeOneOf(expected);
  });
  test("should create a valid bst for a six value array", () => {
    const values = [0, 1, 2, 3, 4, 5];
    const result = sortedArrayToBST(values);
    const expected = [createBinarySearchTree([3, 1, 5, 0, 2, 4])];

    expect(result).toBeOneOf(expected);
  });
  test("should create a valid bst for a 10 value array", () => {
    const values = generateSortedItemArray(10);
    const result = sortedArrayToBST(values);
    const expected = [createTree([5, 2, 8, 1, 4, 7, 9, 0, null, 3, null, 6])];

    expect(result).toBeOneOf(expected);
  });
});
