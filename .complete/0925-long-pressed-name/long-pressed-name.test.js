const isLongPressedName = require("./long-pressed-name");

describe("tests for leecode 925 - long pressed name", () => {
  describe("should return correct result for different inputs", () => {
    it("should return true for 'alex' and 'aaleex'", () => {
      let name = "alex";
      let typed = "aaleex";
      let expected = true;
      let result = isLongPressedName(name, typed);
      expect(result).toBe(expected);
    });
    it("should return false for 'saeed' and 'ssaaedd'", () => {
      let name = "saeed";
      let typed = "ssaaedd";
      let expected = false;
      let result = isLongPressedName(name, typed);
      expect(result).toBe(expected);
    });
    it("should return true for 'saeed' and 'ssaaeeedd'", () => {
      let name = "saeed";
      let typed = "ssaaeeedd";
      let expected = true;
      let result = isLongPressedName(name, typed);
      expect(result).toBe(expected);
    });
    it("should return true for 'laiden' and 'laiden'", () => {
      let name = "laiden";
      let typed = "laiden";
      let expected = true;
      let result = isLongPressedName(name, typed);
      expect(result).toBe(expected);
    });
    it("should return false for 'xnhtq' and 'xhhttqq'", () => {
      let name = "xnhtq";
      let typed = "xhhttqq";
      let expected = false;
      let result = isLongPressedName(name, typed);
      expect(result).toBe(expected);
    });
    it("should return false for 'alex' and 'aaleexa'", () => {
      let name = "alex";
      let typed = "aaleexa";
      let expected = false;
      let result = isLongPressedName(name, typed);
      expect(result).toBe(expected);
    });
  });
});
