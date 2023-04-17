const maxSubArray = require("./maximum-subarray");

describe("tests for leecode 53 - maximum subarray", () => {
  it("should work when nums has a length of 1", () => {
    let nums = [1];
    let expected = 1;
    let result = maxSubArray(nums);
    expect(result).toBe(expected);
  });
  it("should work when longest subarray is in middle of array", () => {
    let nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
    let expected = 6;
    let result = maxSubArray(nums);
    expect(result).toBe(expected);
  });
  it("should work when subarray is the entire array", () => {
    let nums = [5, 4, -1, 7, 8];
    let expected = 23;
    let result = maxSubArray(nums);
    expect(result).toBe(expected);
  });
  it("should work when subarray is at end of array", () => {
    let nums = [5, 4, -20, 7, 8];
    let expected = 15;
    let result = maxSubArray(nums);
    expect(result).toBe(expected);
  });
  it("should work when subarray is at start of array", () => {
    let nums = [8, 7, -20, 4, 5];
    let expected = 15;
    let result = maxSubArray(nums);
    expect(result).toBe(expected);
  });
});
