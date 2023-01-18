const findMode = require("./find-mode-in-binary-search-tree");
const { createBinaryTree } = require("../../data_structures/Trees/Trees");

describe("tests for leecode 501 - find mode in binary search tree", () => {
  it("should work on arrays with a length of 1", () => {
    const tree = createBinaryTree([10]);
    const expected = [10];
    const result = findMode(tree);
    expect(result).toEqual(expected);
  });
  it("should work on arrays with a length of 2", () => {
    let tree = createBinaryTree([10, 10]);
    let expected = [10];
    let result = findMode(tree);
    expect(result).toEqual(expected);

    tree = createBinaryTree([10, null, 20]);
    expected = [
      [10, 20],
      [20, 10],
    ];
    result = findMode(tree);
    expect(result).toBeOneOf(expected);
  });
  it("should work on arrays with a length of 5+", () => {
    let tree = createBinaryTree([10, 10, 10, 10, 10]);
    let expected = [10];
    let result = findMode(tree);
    expect(result).toEqual(expected);

    // there may be more solutions that would produce a different end result
    tree = createBinaryTree([10, null, 20, null, 30, 35, 40]);
    result = findMode(tree);
    expected = [
      [10, 20, 30, 35, 40],
      [10, 20, 35, 30, 40],
      [40, 30, 35, 20, 10],
    ];
    expect(result).toBeOneOf(expected);

    tree = createBinaryTree([
      50, 33, 63, 22, 33, 63, 72, 18, 25, 33, 37, 59, 63, 64, 79,
    ]);
    result = findMode(tree);
    expected = [
      [33, 63],
      [63, 33],
    ];
    expect(result).toBeOneOf(expected);
  });
});
