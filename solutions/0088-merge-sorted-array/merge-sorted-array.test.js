const merge = require("./merge-sorted-array");

describe("test for leetcode 88 - merge sorted array", () => {
  test("should return sorted array when second array doesn't have any values", () => {
    const arr1 = [1];
    const arr2 = [];
    merge(arr1, arr1.length - arr2.length, arr2, arr2.length);
    const result = arr1;
    const expected = [1];

    expect(result).toEqual(expected);
  });
  test("should return sorted array when first array doesn't have any values", () => {
    const arr1 = [0];
    const arr2 = [1];
    merge(arr1, arr1.length - arr2.length, arr2, arr2.length);
    const result = arr1;
    const expected = [1];

    expect(result).toEqual(expected);
  });
  test("should return sorted array when both arrays have values", () => {
    const arr1 = [1, 2, 3, 0, 0, 0];
    const arr2 = [2, 5, 6];
    merge(arr1, arr1.length - arr2.length, arr2, arr2.length);
    const result = arr1;
    const expected = [1, 2, 2, 3, 5, 6];

    expect(result).toEqual(expected);
  });
});
