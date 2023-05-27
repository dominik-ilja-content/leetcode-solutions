const largestLocal = require("./largest-local-values-in-a-matrix");

describe("tests for leecode 2373 - largest local values in a matrix", () => {
  describe("should return correct result for different inputs", () => {
    it("should return a single row and column matrix if the grid is 3x3", () => {
      let grid = [
        [1, 2, 3],
        [5, 4, 3],
        [1, 6, 1],
      ];
      let expected = [[6]];
      let result = largestLocal(grid);
      expect(result).toEqual(expected);
    });
    it("should return a matrix where it's rows and columns match the contiguous 3x3 grid", () => {
      let grid = [
        [9, 9, 8, 1],
        [5, 6, 2, 6],
        [8, 2, 6, 4],
        [6, 2, 2, 2],
      ];
      let expected = [
        [9, 9],
        [8, 6],
      ];
      let result = largestLocal(grid);
      expect(result).toEqual(expected);
    });
  });
});
