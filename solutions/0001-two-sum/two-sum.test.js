const twoSum = require("./two-sum");

describe("tests for leetcode 1 - two sum", () => {
  test("should work with repeating numbers", () => {
    expect(twoSum([3, 3], 6)).toBeOneOf([
      [0, 1],
      [1, 0],
    ]);
    expect(twoSum([15, 15], 30)).toBeOneOf([
      [0, 1],
      [1, 0],
    ]);
    expect(
      twoSum([1, 1, 1, 1, 1, 4, 1, 1, 1, 1, 1, 7, 1, 1, 1, 1, 1], 11)
    ).toBeOneOf([
      [5, 11],
      [11, 5],
    ]);
  });
  test("should return correct indexes", () => {
    expect(twoSum([2, 7, 11, 15], 9)).toBeOneOf([
      [0, 1],
      [1, 0],
    ]);
    expect(twoSum([3, 2, 4], 6)).toBeOneOf([
      [1, 2],
      [2, 1],
    ]);
    expect(twoSum([1, 98, 7, 54, 2], 3)).toBeOneOf([
      [0, 4],
      [4, 0],
    ]);
    expect(twoSum([1, 98, 7, 54, 2], 152)).toBeOneOf([
      [1, 3],
      [3, 1],
    ]);
  });
});
