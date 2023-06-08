const isSubtree = require("./subtree-of-another-tree");
const { createBinaryTree } = require("../../data_structures/Trees");

describe("tests for leecode 572 - subtree of another tree", () => {
  describe("should return correct result for different inputs", () => {
    it("should return true for root of [3, 4, 5, 1, 2] & subRoot of [4, 1, 2]", () => {
      let root = createBinaryTree([3, 4, 5, 1, 2]);
      let subRoot = createBinaryTree([4, 1, 2]);
      let expected = true;
      let result = isSubtree(root, subRoot);
      expect(result).toBe(expected);
    });
    it("should return false for root of [3,4,5,1,2,null,null,null,null,0] & subRoot of [4, 1, 2]", () => {
      let root = createBinaryTree([3, 4, 5, 1, 2, null, null, null, null, 0]);
      let subRoot = createBinaryTree([4, 1, 2]);
      let expected = false;
      let result = isSubtree(root, subRoot);
      expect(result).toBe(expected);
    });
  });
});
