const buildTree = require("./construct-binary-tree-from-preorder-and-inorder-traversal");
const { createBinaryTree } = require("../../data_structures/Trees");

describe("tests for leecode 105 - construct binary tree from preorder and inorder traversal", () => {
  describe("should return correct result for different inputs", () => {
    it("should return tree of [-1] for [-1] & [-1]", () => {
      let preorder = [-1];
      let inorder = [-1];
      let expected = createBinaryTree([-1]);
      let result = buildTree(preorder, inorder);
      expect(result).toEqual(expected);
    });
    it("should return tree of [3, 9, 20, null, null, 15, 7] for [3, 9, 20, 15, 7] & [9, 3, 15, 20, 7]", () => {
      let preorder = [3, 9, 20, 15, 7];
      let inorder = [9, 3, 15, 20, 7];
      let expected = createBinaryTree([3, 9, 20, null, null, 15, 7]);
      let result = buildTree(preorder, inorder);
      expect(result).toEqual(expected);
    });
    it("should return tree of [20,9,6,7,null,13,14,3,2,null,null,null,null,null,null,null,1] for [20, 9, 7, 3, 2, 1, 6, 13, 14] & [3, 7, 2, 1, 9, 20, 13, 6, 14]", () => {
      let preorder = [20, 9, 7, 3, 2, 1, 6, 13, 14];
      let inorder = [3, 7, 2, 1, 9, 20, 13, 6, 14];
      let expected = createBinaryTree([
        20,
        9,
        6,
        7,
        null,
        13,
        14,
        3,
        2,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        1,
      ]);
      let result = buildTree(preorder, inorder);
      expect(result).toEqual(expected);
    });
  });
});
