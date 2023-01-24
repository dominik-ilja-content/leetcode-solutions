const maxDepth = require("./maximum-depth-of-binary-tree");
const { createBinaryTree } = require("../../data_structures/Trees/Trees");
const { generateAlternatingArray } = require("../../data_structures/Helpers");

describe("tests for leecode 104 - maximum depth of binary tree", () => {
  it("should return zero for null root", () => {
    let tree = null;
    let expected = 0;
    let result = maxDepth(tree);
    expect(result).toBe(expected);
  });
  it("should return one for tree of only the root", () => {
    let tree = createBinaryTree([100]);
    let expected = 1;
    let result = maxDepth(tree);
    expect(result).toBe(expected);
  });
  it("should return three", () => {
    let tree = createBinaryTree(Array(7).fill(1));
    let expected = 3;
    let result = maxDepth(tree);
    expect(result).toBe(expected);
  });
  it("should return fifty", () => {
    let tree = createBinaryTree(generateAlternatingArray(100));
    let expected = 50;
    let result = maxDepth(tree);
    expect(result).toBe(expected);

    tree = createBinaryTree([1, ...generateAlternatingArray(98)]);
    expected = 50;
    result = maxDepth(tree);
    expect(result).toBe(expected);
  });
});
