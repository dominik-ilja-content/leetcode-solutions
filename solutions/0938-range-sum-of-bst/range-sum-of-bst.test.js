const rangeSumBST = require("./range-sum-of-bst");
const { createBinarySearchTree } = require("../../data_structures/Trees/Trees");

describe("tests for leecode 938 - range sum of bst", () => {
  it("should work on tree with 1 node", () => {
    let tree = createBinarySearchTree([1]);
    let result = rangeSumBST(tree, 0, 5);
    let expected = 1;
    expect(result).toBe(expected);

    tree = createBinarySearchTree([1]);
    result = rangeSumBST(tree, 2, 5);
    expected = 0;
    expect(result).toBe(expected);
  });
  it("should work on tree with multiple nodes", () => {
    let tree = createBinarySearchTree([10, 5, 15, 3, 7, 18]);
    let result = rangeSumBST(tree, 7, 15);
    let expected = 32;
    expect(result).toBe(expected);

    tree = createBinarySearchTree([10, 5, 15, 3, 7, 13, 18, 1, 6]);
    result = rangeSumBST(tree, 6, 10);
    expected = 23;
    expect(result).toBe(expected);
  });
});
