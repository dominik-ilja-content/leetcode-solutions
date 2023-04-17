const containsNearbyDuplicate = require("./contains-duplicats-ii");

describe("tests for leetcode 219 - contains duplicates ii", () => {
  test("should return false if length of array is one or less", () => {
    expect(containsNearbyDuplicate([], 1)).toBe(false);
    expect(containsNearbyDuplicate([1], 1)).toBe(false);
  });
  test("should work for arrays with length of two", () => {
    expect(containsNearbyDuplicate([1, 1], 3)).toBe(true);
    expect(containsNearbyDuplicate([1, 1], 2)).toBe(true);
    expect(containsNearbyDuplicate([1, 1], 1)).toBe(true);
    expect(containsNearbyDuplicate([1, 1], 0)).toBe(false);
  });
  test("should work for arrays with length of three", () => {
    expect(containsNearbyDuplicate([1, 2, 2], 3)).toBe(true);
    expect(containsNearbyDuplicate([1, 2, 2], 2)).toBe(true);
    expect(containsNearbyDuplicate([1, 2, 2], 1)).toBe(true);
    expect(containsNearbyDuplicate([1, 2, 2], 0)).toBe(false);
  });
  test("should work for arrays with length of four", () => {
    expect(containsNearbyDuplicate([1, 2, 3, 1], 3)).toBe(true);
    expect(containsNearbyDuplicate([1, 2, 3, 1], 2)).toBe(false);
    expect(containsNearbyDuplicate([1, 2, 3, 3], 1)).toBe(true);
    expect(containsNearbyDuplicate([1, 2, 1, 2], 0)).toBe(false);
  });
  test("should work for arrays with length of five", () => {
    expect(containsNearbyDuplicate([1, 2, 3, 1, 2], 3)).toBe(true);
    expect(containsNearbyDuplicate([1, 2, 3, 1, 2], 2)).toBe(false);
    expect(containsNearbyDuplicate([1, 2, 3, 2, 1], 1)).toBe(false);
    expect(containsNearbyDuplicate([1, 1, 1, 1, 1], 0)).toBe(false);
  });
  test("should work for arrays with length up to 100,000", () => {
    const arr = [
      0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4,
      5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9,
      0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4,
      5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7, 9, 9,
    ];

    expect(containsNearbyDuplicate(arr, 1)).toBe(true);
  });
});
