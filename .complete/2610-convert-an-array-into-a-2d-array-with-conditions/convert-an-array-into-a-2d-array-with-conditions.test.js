const findMatrix = require("./convert-an-array-into-a-2d-array-with-conditions");

describe("tests for leecode 2610 - convert an array into a 2d array with conditions", () => {
  it("Should create new rows when a number already exists in a row", () => {
    let nums = [1, 1, 1];
    let expected = [[1], [1], [1]];
    let result = findMatrix(nums);
    expect(result).toEqual(expected);
  });
  it("Should add a number to the first row that doesn't have the number", () => {
    let nums = [1, 1, 1, 2, 3, 4];
    let expected = [[1, 2, 3, 4], [1], [1]];
    let result = findMatrix(nums);
    expect(result).toEqual(expected);

    nums = [1, 1, 1, 2, 3, 4, 2, 3, 3, 4];
    expected = [
      [1, 2, 3, 4],
      [1, 2, 3, 4],
      [1, 3],
    ];
    result = findMatrix(nums);
    expect(result).toEqual(expected);
  });
  it("Should return one row if all numbers are unique", () => {
    let nums = [1, 2, 3, 4];
    let expected = [[1, 2, 3, 4]];
    let result = findMatrix(nums);
    expect(result).toEqual(expected);
  });
});
