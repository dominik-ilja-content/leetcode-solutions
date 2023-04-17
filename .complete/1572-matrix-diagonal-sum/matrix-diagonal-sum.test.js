const diagonalSum = require("./matrix-diagonal-sum");

describe("tests for leecode 1572 - matrix diagonal sum", () => {
  it("should work on a 1x1 matrix", () => {
    let matrix = [[1]];
    let expected = 1;
    let result = diagonalSum(matrix);
    expect(result).toBe(expected);
  });
  it("should work on a 2x2 matrix", () => {
    let matrix = [
      [1, 1],
      [1, 1],
    ];
    let expected = 4;
    let result = diagonalSum(matrix);
    expect(result).toBe(expected);
  });
  it("should work on a 3x3 matrix", () => {
    let matrix = [
      [1, 2, 1],
      [1, 2, 1],
      [1, 2, 1],
    ];
    let expected = 6;
    let result = diagonalSum(matrix);
    expect(result).toBe(expected);
  });
  it("should work on a 4x4 matrix", () => {
    let matrix = [
      [1, 2, 2, 1],
      [1, 2, 2, 1],
      [1, 2, 2, 1],
      [1, 2, 2, 1],
    ];
    let expected = 12;
    let result = diagonalSum(matrix);
    expect(result).toBe(expected);
  });
  it("should work on a 10x10 matrix", () => {
    let matrix = [
      [1, 2, 3, 4, 5, 5, 4, 3, 2, 1],
      [1, 2, 3, 4, 5, 5, 4, 3, 2, 1],
      [1, 2, 3, 4, 5, 5, 4, 3, 2, 1],
      [1, 2, 3, 4, 5, 5, 4, 3, 2, 1],
      [1, 2, 3, 4, 5, 5, 4, 3, 2, 1],
      [1, 2, 3, 4, 5, 5, 4, 3, 2, 1],
      [1, 2, 3, 4, 5, 5, 4, 3, 2, 1],
      [1, 2, 3, 4, 5, 5, 4, 3, 2, 1],
      [1, 2, 3, 4, 5, 5, 4, 3, 2, 1],
      [1, 2, 3, 4, 5, 5, 4, 3, 2, 1],
    ];
    let expected = 60;
    let result = diagonalSum(matrix);
    expect(result).toBe(expected);
  });
  it("should work on a 11x11 matrix", () => {
    let matrix = [
      [1, 2, 3, 4, 5, 6, 5, 4, 3, 2, 1],
      [1, 2, 3, 4, 5, 6, 5, 4, 3, 2, 1],
      [1, 2, 3, 4, 5, 6, 5, 4, 3, 2, 1],
      [1, 2, 3, 4, 5, 6, 5, 4, 3, 2, 1],
      [1, 2, 3, 4, 5, 6, 5, 4, 3, 2, 1],
      [1, 2, 3, 4, 5, 6, 5, 4, 3, 2, 1],
      [1, 2, 3, 4, 5, 6, 5, 4, 3, 2, 1],
      [1, 2, 3, 4, 5, 6, 5, 4, 3, 2, 1],
      [1, 2, 3, 4, 5, 6, 5, 4, 3, 2, 1],
      [1, 2, 3, 4, 5, 6, 5, 4, 3, 2, 1],
      [1, 2, 3, 4, 5, 6, 5, 4, 3, 2, 1],
    ];
    let expected = 66;
    let result = diagonalSum(matrix);
    expect(result).toBe(expected);
  });
});
