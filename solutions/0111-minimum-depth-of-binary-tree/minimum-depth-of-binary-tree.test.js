const minDepth = require("./minimum-depth-of-binary-tree");
const { createBinaryTree } = require("../../data_structures/Trees");

describe("tests for leecode 111 - minimum depth of binary tree", () => {
  it("should return zero if root is null", () => {
    let tree = null;
    let expected = 0;
    let result = minDepth(tree);
    expect(result).toBe(expected);
  });
  it("should return one if root is only node", () => {
    let tree = createBinaryTree([1]);
    let expected = 1;
    let result = minDepth(tree);
    expect(result).toBe(expected);
  });
  it("should return two if tree has two nodes", () => {
    let tree = createBinaryTree([1, 2]);
    let expected = 2;
    let result = minDepth(tree);
    expect(result).toBe(expected);

    tree = createBinaryTree([1, null, 2]);
    expected = 2;
    result = minDepth(tree);
    expect(result).toBe(expected);
  });
  it("should work for lopsided trees", () => {
    let tree = createBinaryTree([1, 2, null, 3, null, 4, null, 5, null]);
    let expected = 5;
    let result = minDepth(tree);
    expect(result).toBe(expected);

    tree = createBinaryTree([
      1,
      null,
      2,
      null,
      3,
      null,
      4,
      null,
      5,
      null,
      6,
      null,
      7,
    ]);
    expected = 7;
    result = minDepth(tree);
    expect(result).toBe(expected);
  });
  it("should work for trees of varying dimensions", () => {
    let tree = createBinaryTree([3, 9, 20, null, null, 15, 7]);
    let expected = 2;
    let result = minDepth(tree);
    expect(result).toBe(expected);

    tree = createBinaryTree([
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15,
    ]);
    expected = 4;
    result = minDepth(tree);
    expect(result).toBe(expected);
  });
});
