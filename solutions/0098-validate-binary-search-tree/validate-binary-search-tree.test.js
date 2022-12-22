const {
  TreeNode,
  createBinarySearchTree,
  createTree,
} = require("../../data-structures/Trees");
const { generateShuffledArray } = require("../../data-structures/Helpers");

const isValidBST = require("./validate-binary-search-tree");

describe("tests for leetcode 98 - validate binary search tree", () => {
  test("should return true for a tree with a single node", () => {
    const tree = new TreeNode(1);
    const result = isValidBST(tree);
    const expected = true;
    expect(result).toBe(expected);
  });
  test("should return correct result for three nodes", () => {
    const invalidTree = createTree([2, 3, 1]);
    let result = isValidBST(invalidTree);
    let expected = false;
    expect(result).toBe(expected);

    const validTree = createBinarySearchTree([2, 1, 3]);
    result = isValidBST(validTree);
    expected = true;
    expect(result).toBe(expected);
  });
  test("should return correct result for seven nodes", () => {
    const invalidTree = createTree([5, 1, 4, null, null, 3, 6]);
    let result = isValidBST(invalidTree);
    let expected = false;
    expect(result).toBe(expected);

    const validTree = createBinarySearchTree([5, 1, 6, 3, 4, 2, 3]);
    result = isValidBST(validTree);
    expected = true;
    expect(result).toBe(expected);
  });
  test("should return correct result for 10,000 nodes", () => {
    const invalidTree = createTree(Array(10000).fill(1));
    let result = isValidBST(invalidTree);
    let expected = false;
    expect(result).toBe(expected);

    const validTree = createBinarySearchTree(generateShuffledArray(10000));
    result = isValidBST(validTree);
    expected = true;
    expect(result).toBe(expected);
  });
});
