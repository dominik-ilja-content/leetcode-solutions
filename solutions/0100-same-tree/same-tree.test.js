const isSameTree = require("./same-tree");
const { createBinaryTree } = require("../../data_structures/Trees");

describe("tests for leecode 0100 - same tree", () => {
  it("should return true if both trees are null", () => {
    let tree1 = null;
    let tree2 = null;
    let expected = true;
    let result = isSameTree(tree1, tree2);
    expect(result).toBe(expected);
  });
  it("should return false if only one tree is null", () => {
    let tree1 = null;
    let tree2 = createBinaryTree([1]);
    let expected = false;
    let result = isSameTree(tree1, tree2);
    expect(result).toBe(expected);
  });
  it("should return false if tree values don't match", () => {
    let tree1 = createBinaryTree([0]);
    let tree2 = createBinaryTree([1]);
    let expected = false;
    let result = isSameTree(tree1, tree2);
    expect(result).toBe(expected);
  });
  it("should return true for matching trees", () => {
    let tree1 = createBinaryTree([0, 1, 2, 3, 4, 5]);
    let tree2 = createBinaryTree([0, 1, 2, 3, 4, 5]);
    let expected = true;
    let result = isSameTree(tree1, tree2);
    expect(result).toBe(expected);

    tree1 = createBinaryTree([5, 6, 7, 3, 2, 1]);
    tree2 = createBinaryTree([5, 6, 7, 3, 2, 1]);
    expected = true;
    result = isSameTree(tree1, tree2);
    expect(result).toBe(expected);
  });
  it("should return false for un-matching trees", () => {
    let tree1 = createBinaryTree([0, 2, 3]);
    let tree2 = createBinaryTree([0, 1, 2]);
    let expected = false;
    let result = isSameTree(tree1, tree2);
    expect(result).toBe(expected);

    tree1 = createBinaryTree([7, 2, 3]);
    tree2 = createBinaryTree([5, 1, 2]);
    expected = false;
    result = isSameTree(tree1, tree2);
    expect(result).toBe(expected);
  });
});
