const minPartitions = require("./partitioning-into-minimum-number-of-deci-binary-numbers");

describe("tests for leecode 1689 - partitioning into minimum number of deci binary numbers", () => {
  it("should work for strings with length of one", () => {
    let n = "1";
    let expected = 1;
    let result = minPartitions(n);
    expect(result).toBe(expected);
  });
  it("should work with strings with lengths up to one hundred", () => {
    let n =
      "1234567891123456789112345678911234567891123456789112345678911234567891123456789112345678911234567891";
    let expected = 9;
    let result = minPartitions(n);
    expect(result).toBe(expected);
  });
});
