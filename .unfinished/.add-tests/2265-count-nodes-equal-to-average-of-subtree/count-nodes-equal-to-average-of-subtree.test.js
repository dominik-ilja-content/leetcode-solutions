const averageOfSubtree = require("./count-nodes-equal-to-average-of-subtree");
const { createBinaryTree } = require("../../data_structures/Trees");

describe("tests for leecode 2265 - count nodes equal to average of subtree", () => {
  it("", () => {
    let tree = createBinaryTree([4, 8, 5, 0, 1, null, 6]);
    let expected = 5;
    let result = averageOfSubtree(tree);
    expect(result).toBe(expected);
  });
  it("", () => {
    let tree = createBinaryTree([1]);
    let expected = 1;
    let result = averageOfSubtree(tree);
    expect(result).toBe(expected);
  });
});
