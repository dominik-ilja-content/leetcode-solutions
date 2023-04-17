const preorderTraversal = require("./binary-tree-preorder-traversal");
const { createBinaryTree } = require("../../../data_structures/Trees");

describe("tests for leecode 144 - binary tree preorder traversal", () => {
  it("should return an empty array if the tree is null", () => {
    let tree = null;
    let expected = [];
    let result = preorderTraversal(tree);
    expect(result).toEqual(expected);
  });
  it("should return preorder of a single node", () => {
    let tree = createBinaryTree([1]);
    let expected = [1];
    let result = preorderTraversal(tree);
    expect(result).toEqual(expected);
  });
  it("should return preorder of balanced trees", () => {
    let tree = createBinaryTree([1, 2, 3]);
    let expected = [1, 2, 3];
    let result = preorderTraversal(tree);
    expect(result).toEqual(expected);

    tree = createBinaryTree([1, 2, 3, 4, 5, 6, 7]);
    expected = [1, 2, 4, 5, 3, 6, 7];
    result = preorderTraversal(tree);
    expect(result).toEqual(expected);
  });
  it("should return preorder of lopsided trees", () => {
    let tree = createBinaryTree([1, 2, null, 3]);
    let expected = [1, 2, 3];
    let result = preorderTraversal(tree);
    expect(result).toEqual(expected);

    tree = createBinaryTree([1, 2, 3, 4, 5, null, 6, 7]);
    expected = [1, 2, 4, 7, 5, 3, 6];
    result = preorderTraversal(tree);
    expect(result).toEqual(expected);
  });
  it("should return preorder of varying tree shapes", () => {
    let tree = createBinaryTree([
      1,
      2,
      3,
      4,
      5,
      null,
      6,
      7,
      null,
      null,
      8,
      9,
      10,
      null,
      null,
      null,
      null,
      11,
      null,
      null,
      12,
    ]);
    let expected = [1, 2, 4, 7, 5, 8, 3, 6, 9, 11, 10, 12];
    let result = preorderTraversal(tree);
    expect(result).toEqual(expected);

    tree = createBinaryTree([1, 2, 3, 4, 5, null, 6, 7, 8, 9, 10, 11, 12]);
    expected = [1, 2, 4, 7, 8, 5, 9, 10, 3, 6, 11, 12];
    result = preorderTraversal(tree);
    expect(result).toEqual(expected);
  });
});
