const differenceOfSum = require("./difference-between-element-sum-and-digit-sum");

/*
    1 <= nums.length <= 2000
    1 <= nums[i] <= 2000
*/

describe("tests for leecode 2535 - difference between element sum and digit sum", () => {
  it("should return zero", () => {
    let nums = [1];
    let expected = 0;
    let result = differenceOfSum(nums);
    expect(result).toBe(expected);

    nums = [1, 2, 3, 4];
    expected = 0;
    result = differenceOfSum(nums);
    expect(result).toBe(expected);
  });
  it("should return nine", () => {
    let nums = [10, 2];
    let expected = 9;
    let result = differenceOfSum(nums);
    expect(result).toBe(expected);

    nums = [1, 15, 6, 3];
    expected = 9;
    result = differenceOfSum(nums);
    expect(result).toBe(expected);
  });
  it("should return eleven thousand and seventy", () => {
    let nums = [1111, 2222, 3333, 4444];
    let expected = 11070;
    let result = differenceOfSum(nums);
    expect(result).toBe(expected);
  });
});
