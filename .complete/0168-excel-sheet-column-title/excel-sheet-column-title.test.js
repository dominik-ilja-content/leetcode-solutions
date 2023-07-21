const convertToTitle = require("./excel-sheet-column-title");

describe("tests for leecode 168 - excel sheet column title", () => {
  describe("should return correct result for different inputs", () => {
    it("should return 'A' for '1'", () => {
      let columnNumber = 1;
      let expected = "A";
      let result = convertToTitle(columnNumber);
      expect(result).toBe(expected);
    });
    it("should return 'AB' for '28'", () => {
      let columnNumber = 28;
      let expected = "AB";
      let result = convertToTitle(columnNumber);
      expect(result).toBe(expected);
    });
    it("should return 'ZY' for '701'", () => {
      let columnNumber = 701;
      let expected = "ZY";
      let result = convertToTitle(columnNumber);
      expect(result).toBe(expected);
    });
    it("should return 'FXSHRXW' for '2147483647'", () => {
      let columnNumber = 2147483647;
      let expected = "FXSHRXW";
      let result = convertToTitle(columnNumber);
      expect(result).toBe(expected);
    });
  });
});
