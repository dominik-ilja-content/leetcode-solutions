const numJewelsInStones = require("./jewels-and-stones");

/*
    1 <= jewels.length, stones.length <= 50
    jewels and stones consist of only English letters.
    All the characters of jewels are unique.
*/

describe("tests for leecode 771 - jewels and stones", () => {
  describe("should return correct amount of matches", () => {
    it("should return 1", () => {
      let jewels = "a";
      let stones = "a";
      let expected = 1;
      let result = numJewelsInStones(jewels, stones);
      expect(result).toBe(expected);
    });
    it("should return 2", () => {
      let jewels = "a";
      let stones = "aa";
      let expected = 2;
      let result = numJewelsInStones(jewels, stones);
      expect(result).toBe(expected);
    });
    it("should return 5", () => {
      let jewels = "aAbBcC";
      let stones = "aAABCdef";
      let expected = 5;
      let result = numJewelsInStones(jewels, stones);
      expect(result).toBe(expected);
    });
    it("should return 10", () => {
      let jewels = "abcdefghijklmnopqrstuvwxyz";
      let stones = "AbCdEfGhIjKlMnOpQrStUVWXYZ";
      let expected = 10;
      let result = numJewelsInStones(jewels, stones);
      expect(result).toBe(expected);
    });
  });

  it("should distinguish between upper and lowercase characters", () => {
    let jewels = "a";
    let stones = "A";
    let expected = 0;
    let result = numJewelsInStones(jewels, stones);
    expect(result).toBe(expected);
  });
});
