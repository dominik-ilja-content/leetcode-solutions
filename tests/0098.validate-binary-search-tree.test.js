const isValidBST = require("../solutions-unfinished/0098.validate-binary-search-tree");
const {
  createBinarySearchTree,
  createTree,
} = require("../data-structures/Trees");

describe("Tests for Leetcode 98 - Validate Binary Search Tree", () => {
  test("Should work on single node", () => {
    expect(isValidBST(createBinarySearchTree([1]))).toBe(true);
  });
  test("Should work on two layers", () => {
    let validTree = createBinarySearchTree([2, 1, 3]);
    let invalidTree = createTree([2, 3, 1]);

    expect(isValidBST(validTree)).toBe(true);
    expect(isValidBST(invalidTree)).toBe(false);
  });
  test("Should work on many layers", () => {
    let validTree = createBinarySearchTree([5, 1, 6, 3, 4]);
    let invalidTree = createTree([5, 1, 4, null, null, 3, 6]);
    expect(isValidBST(validTree)).toBe(true);
    expect(isValidBST(invalidTree)).toBe(false);

    validTree = createBinarySearchTree([9, 5, 15, 3, 8, 14, 22, 2, 7, 12, 16]);
    invalidTree = createTree([
      9,
      5,
      15,
      3,
      8,
      14,
      22,
      2,
      4,
      7,
      null,
      12,
      null,
      16,
      16,
    ]);
    expect(isValidBST(validTree)).toBe(true);
    expect(isValidBST(invalidTree)).toBe(false);

    invalidTree = createTree([5, 4, 6, null, null, 3, 7]);
    expect(isValidBST(invalidTree)).toBe(false);

    invalidTree = createTree([32, 26, 47, 19, null, null, 56, null, 27]);
    expect(isValidBST(invalidTree)).toBe(false);
  });
});
