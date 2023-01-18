const sortedSquares = require("./squares-of-a-sorted-array");

/*
    Array should be sorted in non-descending order
*/

describe("tests for leecode 977 - squares of a sorted array", () => {
  it("should work on an array with 1 element", () => {
    let nums = [4];
    let expected = [16];
    let result = sortedSquares(nums);
    expect(result).toEqual(expected);
  });
  it("should work on an array with multiple elements", () => {
    let nums = [-4, -1, 0, 3, 10];
    let expected = [0, 1, 9, 16, 100];
    let result = sortedSquares(nums);
    expect(result).toEqual(expected);

    nums = [-7, -3, 2, 3, 11];
    expected = [4, 9, 9, 49, 121];
    result = sortedSquares(nums);
    expect(result).toEqual(expected);

    nums = [100, 200, 10, 4, -2];
    expected = [4, 16, 100, 40000, 10000];
    result = sortedSquares(nums);
    expect(result).toEqual(expected);

    nums = [-200, -100, 5, 91, 99];
    expected = [25, 8281, 9801, 10000, 40000];
    result = sortedSquares(nums);
    expect(result).toEqual(expected);
  });
});
