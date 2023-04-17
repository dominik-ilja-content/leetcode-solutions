const hasPathSum = require("./path-sum");
const { createBinaryTree } = require("../../data_structures/Trees");

describe("tests for leecode 112 - path sum", () => {
  it("should return false if tree is null", () => {
    let tree = null;
    let expected = false;
    let result = hasPathSum(tree, 0);
    expect(result).toBe(expected);
  });
  it("should return false if tree path exists", () => {
    let tree = createBinaryTree([1, 2]);
    let expected = false;
    let result = hasPathSum(tree, 2);
    expect(result).toBe(expected);

    tree = createBinaryTree([1, 2, 3, null, 4, 5, 6, null, 7, 8]);
    expected = false;
    result = hasPathSum(tree, 2000);
    expect(result).toBe(expected);

    tree = createBinaryTree([
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15,
    ]);
    expected = false;
    result = hasPathSum(tree, 2000);
    expect(result).toBe(expected);
  });
  it("should return true if tree path exists", () => {
    let tree = createBinaryTree([1, 2]);
    let expected = true;
    let result = hasPathSum(tree, 3);
    expect(result).toBe(expected);

    tree = createBinaryTree([1, 2, 3, null, 4, 5, 6, null, 7, 8]);
    expected = true;
    result = hasPathSum(tree, 17);
    expect(result).toBe(expected);

    tree = createBinaryTree([
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15,
    ]);
    expected = true;
    result = hasPathSum(tree, 26);
    expect(result).toBe(expected);
  });
});
