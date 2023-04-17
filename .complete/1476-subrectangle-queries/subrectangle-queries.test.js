const SubrectangleQueries = require("./subrectangle-queries");

describe("tests for leecode 1476 - subrectangle queries", () => {
  it("should create a new object that has the passed in values", () => {
    let rectangle = new SubrectangleQueries([
      [1, 2, 1],
      [4, 3, 4],
      [3, 2, 1],
      [1, 1, 1],
    ]);
    let expected = [
      [1, 2, 1],
      [4, 3, 4],
      [3, 2, 1],
      [1, 1, 1],
    ];
    let result = rectangle.rectangle;
    expect(result).toEqual(expected);
  });
  it("should be able to retreive a value from the rectangle", () => {
    let rectangle = new SubrectangleQueries([
      [1, 2, 1],
      [4, 3, 4],
      [3, 2, 1],
      [1, 1, 1],
    ]);
    let expected = 3;
    let result = rectangle.getValue(1, 1);
    expect(result).toBe(expected);
  });
  it("should be able to update a subrectangle within rectangle", () => {
    let rectangle = new SubrectangleQueries([
      [1, 2, 1],
      [4, 3, 4],
      [3, 2, 1],
      [1, 1, 1],
    ]);
    let expected = [
      [5, 5, 5],
      [5, 5, 5],
      [5, 5, 5],
      [5, 5, 5],
    ];
    rectangle.updateSubrectangle(0, 0, 3, 2, 5);
    let result = rectangle.rectangle;
    expect(result).toEqual(expected);
  });
});
