const isSymmetric = require("./symmetric-tree");
const { createTree } = require("../0000-helpers/Trees");

describe("tests for leetcode 101 - symmetric tree", () => {
  test("should work for a one node tree", () => {
    const result = isSymmetric(createTree([1]));
    const expected = true;

    expect(result).toBe(expected);
  });
});
