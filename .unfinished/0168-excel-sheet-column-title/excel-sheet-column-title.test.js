const convertToTitle = require("./excel-sheet-column-title");

// 1 <= columnNumber <= 231 - 1;

describe("tests for leecode 168 - excel sheet column title", () => {
  it("should return a letter between 'A' & 'Z' for numbers 1 to 26", () => {
    let columnNumber = 1;
    let expected = "A";
    let result = convertToTitle(columnNumber);
    expect(result).toBe(expected);

    columnNumber = 18;
    expected = "R";
    result = convertToTitle(columnNumber);
    expect(result).toBe(expected);

    columnNumber = 26;
    expected = "Z";
    result = convertToTitle(columnNumber);
    expect(result).toBe(expected);
  });
  it("should return a two capital letters for numbers 27 to 702", () => {
    let columnNumber = 27;
    let expected = "AA";
    let result = convertToTitle(columnNumber);
    expect(result).toBe(expected);

    columnNumber = 53;
    expected = "BA";
    result = convertToTitle(columnNumber);
    expect(result).toBe(expected);

    columnNumber = 702;
    expected = "ZZ";
    result = convertToTitle(columnNumber);
    expect(result).toBe(expected);
  });
});
