const findTheWinner = require("./find-the-winner-of-the-circular-game");

describe("tests for leecode 1823 - find the winner of the circular game", () => {
  it("should work for one player", () => {
    let expected = 1;
    let result = findTheWinner(1, 1);
    expect(result).toBe(expected);
  });
  it("should work for two players", () => {
    let expected = 2;
    let result = findTheWinner(2, 1);
    expect(result).toBe(expected);

    expected = 1;
    result = findTheWinner(2, 2);
    expect(result).toBe(expected);
  });
  it("should work for three players", () => {
    let expected = 3;
    let result = findTheWinner(3, 2);
    expect(result).toBe(expected);

    expected = 1;
    result = findTheWinner(3, 6);
    expect(result).toBe(expected);
  });
  it("should work for five+ players", () => {
    let expected = 500;
    let result = findTheWinner(500, 1);
    expect(result).toBe(expected);

    expected = 120;
    result = findTheWinner(500, 25);
    expect(result).toBe(expected);
  });
});
