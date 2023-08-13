const maxProfit = require("./best-time-to-buy-and-sell-stock");

describe("tests for leecode 121 - best time to buy and sell stock", () => {
    describe("should return correct result for different inputs", () => {
        it("Should return 5 for [7, 1, 5, 3, 6, 4]", () => {
            let prices = [7, 1, 5, 3, 6, 4];
            let expected = 5;
            let result = maxProfit(prices);
            expect(result).toBe(expected);
        });
        it("Should return 0 for [7, 6, 4, 3, 1]", () => {
            let prices = [7, 6, 4, 3, 1];
            let expected = 0;
            let result = maxProfit(prices);
            expect(result).toBe(expected);
        });
    });
});
