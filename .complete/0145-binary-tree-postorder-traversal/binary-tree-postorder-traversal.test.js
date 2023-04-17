const postorderTraversal = require("./binary-tree-postorder-traversal");
const { createBinaryTree } = require("../../../data_structures/Trees");

describe("tests for leecode 145 - binary tree postorder traversal", () => {
  it("should return an empty array if the tree is null", () => {
    let tree = null;
    let expected = [];
    let result = postorderTraversal(tree);
    expect(result).toEqual(expected);
  });
  it("should return postorder of a single node", () => {
    let tree = createBinaryTree([1]);
    let expected = [1];
    let result = postorderTraversal(tree);
    expect(result).toEqual(expected);
  });
  it("should return postorder of balanced trees", () => {
    let tree = createBinaryTree([1, 2, 3]);
    let expected = [2, 3, 1];
    let result = postorderTraversal(tree);
    expect(result).toEqual(expected);

    tree = createBinaryTree([1, 2, 3, 4, 5, 6, 7]);
    expected = [4, 5, 2, 6, 7, 3, 1];
    result = postorderTraversal(tree);
    expect(result).toEqual(expected);
  });
  it("should return postorder of lopsided trees", () => {
    let tree = createBinaryTree([1, 2, null, 3]);
    let expected = [3, 2, 1];
    let result = postorderTraversal(tree);
    expect(result).toEqual(expected);

    tree = createBinaryTree([1, 2, 3, 4, 5, null, 6, 7]);
    expected = [7, 4, 5, 2, 6, 3, 1];
    result = postorderTraversal(tree);
    expect(result).toEqual(expected);
  });
  it("should return postorder of varying tree shapes", () => {
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
    let expected = [7, 4, 8, 5, 2, 11, 9, 12, 10, 6, 3, 1];
    let result = postorderTraversal(tree);
    expect(result).toEqual(expected);

    tree = createBinaryTree([1, 2, 3, 4, 5, null, 6, 7, 8, 9, 10, 11, 12]);
    expected = [7, 8, 4, 9, 10, 5, 2, 11, 12, 6, 3, 1];
    result = postorderTraversal(tree);
    expect(result).toEqual(expected);
  });
});
