const levelOrder = require("./binary-tree-level-order-traversal");
const { createBinaryTree } = require("../../data_structures/Trees");

describe("tests for leecode 102 - binary tree level order traversal", () => {
  it("should return an empty array if the root is null", () => {
    let tree = null;
    let expected = [];
    let result = levelOrder(tree);
    expect(result).toEqual(expected);
  });
  describe("should return correct results for different inputs", () => {
    it("should return [[1]] for a tree of [1]", () => {
      let tree = createBinaryTree([1]);
      let expected = [[1]];
      let result = levelOrder(tree);
      expect(result).toEqual(expected);
    });
    it("should return [[3],[4, 5],[6,7,8,9]] for a tree of [3,4,5,6,7,8,9]", () => {
      let tree = createBinaryTree([3, 4, 5, 6, 7, 8, 9]);
      let expected = [[3], [4, 5], [6, 7, 8, 9]];
      let result = levelOrder(tree);
      expect(result).toEqual(expected);
    });
    it("should return [[3],[9,20],[15,7]] for a tree of [3,9,20,null,null,15,7]", () => {
      let tree = createBinaryTree([3, 4, 5, 6, 7, 8, 9]);
      let expected = [[3], [4, 5], [6, 7, 8, 9]];
      let result = levelOrder(tree);
      expect(result).toEqual(expected);
    });
  });
});
