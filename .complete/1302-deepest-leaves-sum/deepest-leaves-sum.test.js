const deepestLeavesSum = require("./deepest-leaves-sum");
const { createBinaryTree } = require("../../../data_structures/Trees");

describe("tests for leecode 1302 - deepest leaves sum", () => {
  it("should return value of root if it's the only node", () => {
    let tree = createBinaryTree([1]);
    let expected = 1;
    let result = deepestLeavesSum(tree);
    expect(result).toBe(expected);
  });
  it("should work on a two level tree", () => {
    let tree = createBinaryTree([1, 2, 2]);
    let expected = 4;
    let result = deepestLeavesSum(tree);
    expect(result).toBe(expected);

    tree = createBinaryTree([1, 2]);
    expected = 2;
    result = deepestLeavesSum(tree);
    expect(result).toBe(expected);

    tree = createBinaryTree([1, null, 2]);
    expected = 2;
    result = deepestLeavesSum(tree);
    expect(result).toBe(expected);
  });
  it("should work on a three level tree", () => {
    let tree = createBinaryTree([1, 2, 2, 3]);
    let expected = 3;
    let result = deepestLeavesSum(tree);
    expect(result).toBe(expected);

    tree = createBinaryTree([1, 2, 2, 3, 3]);
    expected = 6;
    result = deepestLeavesSum(tree);
    expect(result).toBe(expected);

    tree = createBinaryTree([1, 2, 2, null, null, 3, 3]);
    expected = 6;
    result = deepestLeavesSum(tree);
    expect(result).toBe(expected);

    tree = createBinaryTree([1, null, 2, 3, 3]);
    expected = 6;
    result = deepestLeavesSum(tree);
    expect(result).toBe(expected);
  });
  it("should work on a four level tree", () => {
    let tree = createBinaryTree([1, 2, 2, 3, null, null, null, 4, 4]);
    let expected = 8;
    let result = deepestLeavesSum(tree);
    expect(result).toBe(expected);

    tree = createBinaryTree([
      1,
      2,
      2,
      3,
      3,
      null,
      3,
      4,
      4,
      null,
      null,
      null,
      4,
    ]);
    expected = 12;
    result = deepestLeavesSum(tree);
    expect(result).toBe(expected);
  });
});
