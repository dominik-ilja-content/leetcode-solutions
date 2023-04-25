const zigzagLevelOrder = require("./binary-tree-zigzag-level-order-traversal");
const { createBinaryTree } = require("../../data_structures/Trees");

describe("tests for leecode 103 - binary tree zigzag level order traversal", () => {
  describe("should return correct result for different inputs", () => {
    it("should return [] for []", () => {
      let tree = createBinaryTree([]);
      let expected = [];
      let result = zigzagLevelOrder(tree);
      expect(result).toEqual(expected);
    });
    it("should return [[1]] for [1]", () => {
      let tree = createBinaryTree([1]);
      let expected = [[1]];
      let result = zigzagLevelOrder(tree);
      expect(result).toEqual(expected);
    });
    it("should return [[3],[20,9],[15,7]] for [3, 9, 20, null, null, 15, 7]", () => {
      let tree = createBinaryTree([3, 9, 20, null, null, 15, 7]);
      let expected = [[1]];
      let result = zigzagLevelOrder(tree);
      expect(result).toEqual(expected);
    });
  });

  // it("", () => {
  //   let setup = null;
  //   let expected = null;
  //   let result = null;
  //   expect(result).toBe(expected);
  // });
});
