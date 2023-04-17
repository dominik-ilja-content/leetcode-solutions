const sortTheStudents = require("./sort-the-students-by-their-kth-score");
// const {} = require("../../data_structures/");

/*
    Row & cols can be 1 to 250 long
    Integers can be 1 to 10^5
    Integers are distinct
    K will be a valid index
*/

describe("tests for leecode 2545 - sort the students by their kth score", () => {
  it("should return unchanged matrix for matrixes of one column and row", () => {
    let score = [[1]];
    let k = 0;
    let expected = [[1]];
    let result = sortTheStudents(score, k);
    expect(result).toEqual(expected);
  });
  it("should work with matrixes of same rows and cols", () => {
    let score = [
      [1, 2, 3, 4, 5],
      [2, 3, 4, 5, 1],
      [3, 4, 5, 1, 2],
      [4, 5, 1, 2, 3],
      [5, 1, 2, 3, 4],
    ];
    let k = 0;
    let expected = [
      [5, 1, 2, 3, 4],
      [4, 5, 1, 2, 3],
      [3, 4, 5, 1, 2],
      [2, 3, 4, 5, 1],
      [1, 2, 3, 4, 5],
    ];
    let result = sortTheStudents(score, k);
    expect(result).toEqual(expected);
  });
  it("should work for matrixes of uneven rows and cols", () => {
    let score = [
      [1, 2, 3, 4, 5],
      [5, 4, 2, 3, 1],
    ];
    let k = 0;
    let expected = [
      [5, 4, 2, 3, 1],
      [1, 2, 3, 4, 5],
    ];
    let result = sortTheStudents(score, k);
    expect(result).toEqual(expected);
  });
  it("should work with values up to 10^5", () => {
    let score = [
      [100000, 99999, 88888, 77777],
      [1, 2, 3, 4],
    ];
    let k = 0;
    let expected = [
      [100000, 99999, 88888, 77777],
      [1, 2, 3, 4],
    ];
    let result = sortTheStudents(score, k);
    expect(result).toEqual(expected);

    score = [
      [1, 2, 3, 4],
      [100000, 99999, 88888, 77777],
    ];
    k = 0;
    expected = [
      [100000, 99999, 88888, 77777],
      [1, 2, 3, 4],
    ];
    result = sortTheStudents(score, k);
    expect(result).toEqual(expected);
  });
});
