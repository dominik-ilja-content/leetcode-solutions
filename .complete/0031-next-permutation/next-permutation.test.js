const nextPermutation = require("./next-permutation");
// const {} = require("../../data_structures/");

describe("tests for leecode 31 - next permutation", () => {
  it("input of [1,2,3] should make [1,3,2]", () => {
    let nums = [1, 2, 3];
    let expected = [1, 3, 2];
    nextPermutation(nums);
    let result = nums;
    expect(result).toEqual(expected);
  });
  it("input of [2,3,1] should make [3,1,2]", () => {
    let nums = [2, 3, 1];
    let expected = [3, 1, 2];
    nextPermutation(nums);
    let result = nums;
    expect(result).toEqual(expected);
  });
  it("input of [1,3,2] should make [2,1,3]", () => {
    let nums = [1, 3, 2];
    let expected = [2, 1, 3];
    nextPermutation(nums);
    let result = nums;
    expect(result).toEqual(expected);
  });
  it("input of [3,2,1] should make [1,2,3]", () => {
    let nums = [3, 2, 1];
    let expected = [1, 2, 3];
    nextPermutation(nums);
    let result = nums;
    expect(result).toEqual(expected);
  });
  it("input of [1,1,5] should make [1,5,1]", () => {
    let nums = [1, 1, 5];
    let expected = [1, 5, 1];
    nextPermutation(nums);
    let result = nums;
    expect(result).toEqual(expected);
  });
  it("input of [3,2,4,1] should make [3,4,1,2]", () => {
    let nums = [3, 2, 4, 1];
    let expected = [3, 4, 1, 2];
    nextPermutation(nums);
    let result = nums;
    expect(result).toEqual(expected);
  });
  it("input of [1,2,3,4,5] should make [1,2,3,5,4]", () => {
    let nums = [1, 2, 3, 4, 5];
    let expected = [1, 2, 3, 5, 4];
    nextPermutation(nums);
    let result = nums;
    expect(result).toEqual(expected);
  });
  it("input of [1,2,3,5,4] should make [1,2,4,3,5]", () => {
    let nums = [1, 2, 3, 5, 4];
    let expected = [1, 2, 4, 3, 5];
    nextPermutation(nums);
    let result = nums;
    expect(result).toEqual(expected);
  });
  it("input of [1,2,5,4,3] should make [1,3,2,4,5]", () => {
    let nums = [1, 2, 5, 4, 3];
    let expected = [1, 3, 2, 4, 5];
    nextPermutation(nums);
    let result = nums;
    expect(result).toEqual(expected);
  });
});
