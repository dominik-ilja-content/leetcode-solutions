const findKthLargest = require("./Kth-Largest-Element-in-an-Array");
// const {} = require("../../data_structures/");

describe("tests for leecode 215 - Kth Largest Element in an Array", () => {
  it("should return 5 for [3, 2, 1, 5, 6, 4] and k is 2", () => {
    let nums = [3, 2, 1, 5, 6, 4];
    let k = 2;
    let expected = 5;
    let result = findKthLargest(nums, k);
    expect(result).toBe(expected);
  });
});
