const oddCells = require("./cells-with-odd-values-in-a-matrix");

describe("tests for leecode 1252 - cells with odd values in a matrix", () => {
  describe("should return correct result for different inputs", () => {
    it("should return 6 when m = 2, n = 3, indicies = [[0, 1], [1, 1]]", () => {
      let m = 2;
      let n = 3;
      let indices = [
        [0, 1],
        [1, 1],
      ];
      let expected = 6;
      let result = oddCells(m, n, indices);
      expect(result).toBe(expected);
    });
    it("should return 0 when m = 2, n = 2, indicies = [[1, 1], [0, 0]]", () => {
      let m = 2;
      let n = 2;
      let indices = [
        [1, 1],
        [0, 0],
      ];
      let expected = 0;
      let result = oddCells(m, n, indices);
      expect(result).toBe(expected);
    });
  });
});
