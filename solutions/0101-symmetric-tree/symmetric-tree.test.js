const isSymmetric = require("./symmetric-tree");
const { createBinaryTree } = require("../../data_structures/Trees/Trees");

describe("tests for leetcode 101 - symmetric tree", () => {
  test("should work for a tree that is only a root", () => {
    const result = isSymmetric(createBinaryTree([1]));
    const expected = true;

    expect(result).toBe(expected);
  });
  test("should work for a two layer tree", () => {
    let result = isSymmetric(createBinaryTree([1, 2, 2]));
    let expected = true;

    expect(result).toBe(expected);

    result = isSymmetric(createBinaryTree([1, 2]));
    expected = false;

    expect(result).toBe(expected);

    result = isSymmetric(createBinaryTree([1, null, 2]));
    expected = false;

    expect(result).toBe(expected);
  });
  test("should work for a three layer tree", () => {
    let result = isSymmetric(createBinaryTree([1, 2, 2, 3, 3, 3, 3]));
    let expected = true;

    expect(result).toBe(expected);

    result = isSymmetric(createBinaryTree([1, 2, 2, 3, 3, 3]));
    expected = false;

    expect(result).toBe(expected);

    result = isSymmetric(createBinaryTree([1, 2, 2, 3, null, 3, 3]));
    expected = false;

    expect(result).toBe(expected);
  });
  test("should work for a four layer tree", () => {
    let result = isSymmetric(
      createBinaryTree([1, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4])
    );
    let expected = true;

    expect(result).toBe(expected);

    result = isSymmetric(
      createBinaryTree([1, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4])
    );
    expected = false;

    expect(result).toBe(expected);

    result = isSymmetric(
      createBinaryTree([1, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, null, 4, 4])
    );
    expected = false;

    expect(result).toBe(expected);
  });
  test("should work for a tree with up to a thousand nodes", () => {
    let result = isSymmetric(createBinaryTree(Array(511).fill(1)));
    let expected = true;

    expect(result).toBe(expected);

    result = isSymmetric(createBinaryTree(Array(1000).fill(1)));
    expected = false;

    expect(result).toBe(expected);
  });
});
