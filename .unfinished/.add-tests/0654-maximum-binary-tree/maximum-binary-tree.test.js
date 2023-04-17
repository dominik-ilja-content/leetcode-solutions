const constructMaximumBinaryTree = require("./maximum-binary-tree");
const { createBinaryTree } = require("../../data_structures/Trees");

describe("tests for leecode 654 - maximum binary tree", () => {
  it("", () => {
    let nums = [3, 2, 1, 6, 0, 5];
    let expected = createBinaryTree([6, 3, 5, null, 2, 0, null, null, 1]);
    let result = constructMaximumBinaryTree(nums);
    expect(result).toEqual(expected);
  });
  it("", () => {
    let nums = [3, 2, 1];
    let expected = createBinaryTree([3, null, 2, null, 1]);
    let result = constructMaximumBinaryTree(nums);
    expect(result).toEqual(expected);
  });
});
