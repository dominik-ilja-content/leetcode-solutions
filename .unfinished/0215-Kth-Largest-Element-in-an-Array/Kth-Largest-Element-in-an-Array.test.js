const findKthLargest = require("./Kth-Largest-Element-in-an-Array");

describe("tests for leecode 215 - Kth Largest Element in an Array", () => {
  it("should return 5 for [3, 2, 1, 5, 6, 4] and k is 2", () => {
    let nums = [3, 2, 1, 5, 6, 4];
    let k = 2;
    let expected = 5;
    let result = findKthLargest(nums, k);
    expect(result).toBe(expected);
  });
  it("should return 4 for [3, 2, 3, 1, 2, 4, 5, 5, 6] and k is 4", () => {
    let nums = [3, 2, 3, 1, 2, 4, 5, 5, 6];
    let k = 4;
    let expected = 4;
    let result = findKthLargest(nums, k);
    expect(result).toBe(expected);
  });
});
