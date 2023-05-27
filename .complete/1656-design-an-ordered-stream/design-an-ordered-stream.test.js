const OrderedStream = require("./design-an-ordered-stream");

describe("tests for leecode 1656 - design an ordered stream", () => {
  describe("should return correct result for different inputs", () => {
    it("should return an array with the inserted value immediately", () => {
      let stream = new OrderedStream(5);
      let expected = ["aaaaa"];
      let result = stream.insert(1, "aaaaa");
      expect(result).toEqual(expected);

      expected = ["bbbbb"];
      result = stream.insert(2, "bbbbb");
      expect(result).toEqual(expected);

      expected = ["ccccc"];
      result = stream.insert(3, "ccccc");
      expect(result).toEqual(expected);

      expected = ["ddddd"];
      result = stream.insert(4, "ddddd");
      expect(result).toEqual(expected);

      expected = ["eeeee"];
      result = stream.insert(5, "eeeee");
      expect(result).toEqual(expected);
    });
    it("should return an array with all values after 'n' amount of inserts", () => {
      let stream = new OrderedStream(5);
      let expected = [];
      let result = stream.insert(5, "eeeee");
      expect(result).toEqual(expected);

      expected = [];
      result = stream.insert(4, "ddddd");
      expect(result).toEqual(expected);

      expected = [];
      result = stream.insert(3, "ccccc");
      expect(result).toEqual(expected);

      expected = [];
      result = stream.insert(2, "bbbbb");
      expect(result).toEqual(expected);

      expected = ["aaaaa", "bbbbb", "ccccc", "ddddd", "eeeee"];
      result = stream.insert(1, "aaaaa");
      expect(result).toEqual(expected);
    });
    it("should return values only when previous values have been received", () => {
      let stream = new OrderedStream(5);
      let expected = [];
      let result = stream.insert(3, "ccccc");
      expect(result).toEqual(expected);

      expected = ["aaaaa"];
      result = stream.insert(1, "aaaaa");
      expect(result).toEqual(expected);

      expected = ["bbbbb", "ccccc"];
      result = stream.insert(2, "bbbbb");
      expect(result).toEqual(expected);

      expected = [];
      result = stream.insert(5, "eeeee");
      expect(result).toEqual(expected);

      expected = ["ddddd", "eeeee"];
      result = stream.insert(4, "ddddd");
      expect(result).toEqual(expected);
    });
  });
});
