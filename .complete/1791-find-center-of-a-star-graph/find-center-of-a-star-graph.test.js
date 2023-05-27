const findCenter = require("./find-center-of-a-star-graph");

describe("tests for leecode 1791 - find center of a star graph", () => {
  describe("should return correct result for different inputs", () => {
    it("should return 2 when the edges are [[1,2],[2,3],[4,2]]", () => {
      let edges = [
        [1, 2],
        [2, 3],
        [4, 2],
      ];
      let expected = 2;
      let result = findCenter(edges);
      expect(result).toBe(expected);
    });
    it("should return 1 when the edges are [[1,2],[5,1],[1,3],[1,4]]", () => {
      let edges = [
        [1, 2],
        [5, 1],
        [1, 3],
        [1, 4],
      ];
      let expected = 1;
      let result = findCenter(edges);
      expect(result).toBe(expected);
    });
  });
});
