const maxPathSum = require("./binary-tree-maximum-path-sum");
const { createBinaryTree } = require("../../data_structures/Trees");

describe("tests for leecode 124 - binary-tree-maximum-path-sum", () => {
  describe("should return correct result for different inputs", () => {
    it("should return 55 for a binary tree of [18, 15, 12, null, null, -45, null, 52, null, 1, 2] ", () => {
      let binaryTree = createBinaryTree([
        18,
        15,
        12,
        null,
        null,
        -45,
        null,
        52,
        null,
        1,
        2,
      ]);
      let expected = 55;
      let result = maxPathSum(binaryTree);
      expect(result).toBe(expected);
    });
    it("should return 55 for a binary tree of [-10, 9, 20, null, null, 15, 7] ", () => {
      let binaryTree = createBinaryTree([-10, 9, 20, null, null, 15, 7]);
      let expected = 42;
      let result = maxPathSum(binaryTree);
      expect(result).toBe(expected);
    });
    it("should return 6 for a binary tree of [1, 2, 3] ", () => {
      let binaryTree = createBinaryTree([1, 2, 3]);
      let expected = 6;
      let result = maxPathSum(binaryTree);
      expect(result).toBe(expected);
    });
    it("should return 383 for a binary tree of [-52, 17, 112, 18, 29, 52, 33, 15, 12, null, null, 9, 26, 73, 4, null, null, null, 4, null, null, 8, null, 79, null, null] ", () => {
      let binaryTree = createBinaryTree([
        -52,
        17,
        112,
        18,
        29,
        52,
        33,
        15,
        12,
        null,
        null,
        9,
        26,
        73,
        4,
        null,
        null,
        null,
        4,
        null,
        null,
        8,
        null,
        79,
        null,
        null,
      ]);
      let expected = 383;
      let result = maxPathSum(binaryTree);
      expect(result).toBe(expected);
    });
  });
});
