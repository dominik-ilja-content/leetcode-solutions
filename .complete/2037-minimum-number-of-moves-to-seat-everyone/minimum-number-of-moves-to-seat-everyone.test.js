const minMovesToSeat = require("./minimum-number-of-moves-to-seat-everyone");

describe("tests for leecode 2037 - minimum number of moves to seat everyone", () => {
  describe("should return correct result for different inputs", () => {
    it("should return 4 for [3, 1, 5] & [2, 7, 4]", () => {
      let seats = [3, 1, 5];
      let students = [2, 7, 4];
      let expected = 4;
      let result = minMovesToSeat(seats, students);
      expect(result).toBe(expected);
    });
    it("should return 7 for [4, 1, 5, 9] & [1, 3, 2, 6]", () => {
      let seats = [4, 1, 5, 9];
      let students = [1, 3, 2, 6];
      let expected = 7;
      let result = minMovesToSeat(seats, students);
      expect(result).toBe(expected);
    });
    it("should return 4 for [2, 2, 6, 6] & [1, 3, 2, 6]", () => {
      let seats = [2, 2, 6, 6];
      let students = [1, 3, 2, 6];
      let expected = 4;
      let result = minMovesToSeat(seats, students);
      expect(result).toBe(expected);
    });
  });
});
