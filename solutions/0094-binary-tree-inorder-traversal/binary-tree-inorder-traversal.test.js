const inorderTraversal = require("./binary-tree-inorder-traversal");
const { createBinaryTree } = require("../../data_structures/Trees/Trees");

describe("tests for leecode 94 - binary tree inorder traversal", () => {
  it("should return an empty array for a null tree", () => {
    let tree = null;
    let expected = [];
    let result = inorderTraversal(tree);

    expect(result).toEqual(expected);
  });
  it("should return a single item array for the root", () => {
    let tree = createBinaryTree([1]);
    let expected = [1];
    let result = inorderTraversal(tree);

    expect(result).toEqual(expected);
  });
  it("should return inorder values for varying length arrays", () => {
    let tree = createBinaryTree([1, 2, 3]);
    let expected = [2, 1, 3];
    let result = inorderTraversal(tree);
    expect(result).toEqual(expected);

    tree = createBinaryTree([1, 2, 3, 4, 5, 6, 7]);
    expected = [4, 2, 5, 1, 6, 3, 7];
    result = inorderTraversal(tree);
    expect(result).toEqual(expected);

    // tree = createBinaryTree([1, 2, 3, 4, 5, 6, 7]);
    // expected = [2, 1, 3];
    // result = inorderTraversal(tree);
    // expect(result).toEqual(expected);

    // tree = createBinaryTree([1, 2, 3, 4, 5, 6, 7]);
    // expected = [2, 1, 3];
    // result = inorderTraversal(tree);
    // expect(result).toEqual(expected);
  });
});
