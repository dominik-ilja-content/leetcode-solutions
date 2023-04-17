const countTriplets = require("./count-triplets-that-can-form-two-arrays-of-equal-xor");

describe("tests for leecode 1422 - count triplets that can form two arrays of equal xor", () => {
  it("", () => {
    let arr = [2, 3, 1, 6, 7];
    let expected = 4;
    let result = countTriplets(arr);
    expect(result).toBe(expected);
  });
  it("", () => {
    let arr = [1, 1, 1, 1, 1];
    let expected = 10;
    let result = countTriplets(arr);
    expect(result).toBe(expected);
  });
});
