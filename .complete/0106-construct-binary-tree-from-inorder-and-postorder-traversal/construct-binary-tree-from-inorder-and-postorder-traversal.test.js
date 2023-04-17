const buildTree = require("./construct-binary-tree-from-inorder-and-postorder-traversal");
const { createBinaryTree } = require("../../data_structures/Trees");

describe("tests for leecode 106 - construct binary tree from inorder and postorder traversal", () => {
  describe("should return correct result for different inputs", () => {
    it("should return tree of [3, 9, 20, null, null, 15, 7] for [9, 3, 15, 20, 7] & [9, 15, 7, 20, 3]", () => {
      let inorder = [9, 3, 15, 20, 7];
      let postorder = [9, 15, 7, 20, 3];
      let expected = createBinaryTree([3, 9, 20, null, null, 15, 7]);
      let result = buildTree(inorder, postorder);
      expect(result).toEqual(expected);
    });
    it("should return tree of [-1] for [-1] & [-1]", () => {
      let inorder = [-1];
      let postorder = [-1];
      let expected = createBinaryTree([-1]);
      let result = buildTree(inorder, postorder);
      expect(result).toEqual(expected);
    });
  });
});
