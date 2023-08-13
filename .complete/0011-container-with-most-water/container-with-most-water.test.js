const maxArea = require("./container-with-most-water");

describe("tests for leecode 11 - container with most water", () => {
    describe("should return correct result for different inputs", () => {
        it("Should return 1 for [1, 1]", () => {
            let heights = [1, 1];
            let expected = 1;
            let result = maxArea(heights);
            expect(result).toBe(expected);
        });
        it("Should return 9 for [99, 9]", () => {
            let heights = [99, 9];
            let expected = 9;
            let result = maxArea(heights);
            expect(result).toBe(expected);
        });
        it("Should return 22 for [1, 22, 22, 1]", () => {
            let heights = [1, 22, 22, 1];
            let expected = 22;
            let result = maxArea(heights);
            expect(result).toBe(expected);
        });
        it("Should return 49 for [1, 8, 6, 2, 5, 4, 8, 3, 7]", () => {
            let heights = [1, 8, 6, 2, 5, 4, 8, 3, 7];
            let expected = 49;
            let result = maxArea(heights);
            expect(result).toBe(expected);
        });
    });
});
