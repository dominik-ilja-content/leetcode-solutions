const getTargetCopy = require("./find-a-corresponding-node-of-a-binary-tree-in-a-clone-of-that-tree");
const {
  createBinaryTree,
  TreeNode,
} = require("../../../data_structures/Trees");

describe("tests for leecode 1379 - find a corresponding node of a binary tree in a clone of that tree", () => {
  it("should work on a one node tree", () => {
    let originalTree = createBinaryTree([1]);
    let copyTree = createBinaryTree([1]);
    let expected = 1;
    let result = getTargetCopy(originalTree);
    expect(result).toBe(expected);
  });
});
