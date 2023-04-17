const isBalanced = require("./balanced-binary-tree");
const { createBinaryTree } = require("../../data_structures/Trees/Trees");

describe("tests for leecode 110 - balanced binary tree", () => {
  it("should return true for null trees", () => {
    let tree = null;
    let expected = true;
    let result = isBalanced(tree);
    expect(result).toBe(expected);
  });
  it("should return true for trees with only a root", () => {
    let tree = createBinaryTree([1]);
    let expected = true;
    let result = isBalanced(tree);
    expect(result).toBe(expected);
  });
  it("should return true for trees who's subtrees have only a one level difference", () => {
    let tree = createBinaryTree([3, 9, 20, null, null, 15, 7]);
    let expected = true;
    let result = isBalanced(tree);
    expect(result).toBe(expected);

    tree = createBinaryTree([1, 2, 3, 4, 5, 6, null, 8]);
    expected = true;
    result = isBalanced(tree);
    expect(result).toBe(expected);
  });
  it("should return false for trees who's subtrees have more than a one level difference", () => {
    let tree = createBinaryTree([1, 2, 2, 3, 3, null, null, 4, 4]);
    let expected = false;
    let result = isBalanced(tree);
    expect(result).toBe(expected);
  });
});
