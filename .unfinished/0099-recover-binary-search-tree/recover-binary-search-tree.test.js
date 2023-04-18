const recoverTree = require("./recover-binary-search-tree");
const { createBinaryTree } = require("../../data_structures/Trees");

describe("tests for leecode 99 - recover binary search tree", () => {
  describe("should return correct result for different inputs", () => {
    it("should make the tree [2, 1] for [1, 2]", () => {
      let tree = createBinaryTree([1, 2]);
      let expected = createBinaryTree([2, 1]);
      let result = recoverTree(tree);
      expect(result).toBe(expected);
    });
    it("should make the tree [3, 1, null, null, 2] for [1, 3, null, null, 2]", () => {
      let tree = createBinaryTree([1, 3, null, null, 2]);
      let expected = createBinaryTree([3, 1, null, null, 2]);
      let result = recoverTree(tree);
      expect(result).toBe(expected);
    });
    it("should make the tree [2, 1, 4, null, null, 3] for [3, 1, 4, null, null, 2]", () => {
      let tree = createBinaryTree([3, 1, 4, null, null, 2]);
      let expected = createBinaryTree([2, 1, 4, null, null, 3]);
      let result = recoverTree(tree);
      expect(result).toBe(expected);
    });
  });

  it("", () => {
    let setup = null;
    let expected = null;
    let result = null;
    expect(result).toBe(expected);
  });
});
