const findDelayedArrivalTime = require("./calculate-delayed-arrival-time");

describe("tests for leecode 2651 - calculate delayed arrival time", () => {
  describe("should return correct result for different inputs", () => {
    it("should return 20 for inputs of 15 & 5", () => {
      let arrivalTime = 15;
      let delayedTime = 5;
      let expected = 20;
      let result = findDelayedArrivalTime(arrivalTime, delayedTime);
      expect(result).toBe(expected);
    });
    it("should return 0 for inputs of 24 & 24", () => {
      let arrivalTime = 24;
      let delayedTime = 24;
      let expected = 0;
      let result = findDelayedArrivalTime(arrivalTime, delayedTime);
      expect(result).toBe(expected);
    });
  });
});
