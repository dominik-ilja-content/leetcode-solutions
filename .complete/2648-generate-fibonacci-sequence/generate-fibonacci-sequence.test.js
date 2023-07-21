const fibGenerator = require("./generate-fibonacci-sequence");

describe("tests for leecode 2648 - generate fibonacci sequence", () => {
  it("should produce the next number in a fibonacci sequence when next is called", () => {
    let gen = fibGenerator();
    let values = [];
    let expectedValues = [0, 1, 1, 2, 3];

    for (let i = 0, expected = 0; i < 5; i++, expected++) {
      let result = gen.next().value;
      expect(result).toEqual(result);
      values.push(result);
    }

    expect(expectedValues).toEqual(values);
  });
});
