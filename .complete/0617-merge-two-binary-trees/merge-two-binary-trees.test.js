const mergeTrees = require("./merge-two-binary-trees");
const { createBinaryTree } = require("../../../data_structures/Trees");

describe("tests for leecode 617 - merge two binary trees", () => {
  it("should return null if both trees are null", () => {
    let tree1 = null;
    let tree2 = null;
    let expected = null;
    let result = mergeTrees(tree1, tree2);
    expect(result).toBe(expected);
  });
  it("should return root node with the value of one", () => {
    let tree1 = createBinaryTree([1]);
    let tree2 = null;
    let expected = createBinaryTree([1]);
    let result = mergeTrees(tree1, tree2);
    expect(result).toEqual(expected);
  });
  it("should work on trees with exact same structure", () => {
    let tree1 = createBinaryTree([1, 2, 3]);
    let tree2 = createBinaryTree([1, 2, 3]);
    let expected = createBinaryTree([2, 4, 6]);
    let result = mergeTrees(tree1, tree2);
    expect(result).toEqual(expected);

    tree1 = createBinaryTree([1, 2, 3, 4, 5, 6, 7]);
    tree2 = createBinaryTree([1, 2, 3, 4, 5, 6, 7]);
    expected = createBinaryTree([2, 4, 6, 8, 10, 12, 14]);
    result = mergeTrees(tree1, tree2);
    expect(result).toEqual(expected);
  });
  it("should work on trees with different structures", () => {
    let tree1 = createBinaryTree([1, 2, 3]);
    let tree2 = createBinaryTree([1, 2]);
    let expected = createBinaryTree([2, 4, 3]);
    let result = mergeTrees(tree1, tree2);
    expect(result).toEqual(expected);

    tree1 = createBinaryTree([1, 2, 3, 4, 5, 6, 7]);
    tree2 = createBinaryTree([1, 2]);
    expected = createBinaryTree([2, 4, 3, 4, 5, 6, 7]);
    result = mergeTrees(tree1, tree2);
    expect(result).toEqual(expected);
  });
});
