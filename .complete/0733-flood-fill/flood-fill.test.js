const floodFill = require("./flood-fill");

describe("tests for leecode 733 - flood fill", () => {
    describe("should return correct result for different inputs", () => {
        it("Should return [[2, 2, 2], [2, 2, 0], [2, 0, 1]] for [[1, 1, 1], [1, 1, 0], [1, 0, 1]], 1, 1, 2", () => {
            let image = [[1, 1, 1], [1, 1, 0], [1, 0, 1]];
            let sr = 1;
            let sc = 1;
            let color = 2;
            let expected = [[2, 2, 2], [2, 2, 0], [2, 0, 1]];
            let result = floodFill(image, sr, sc, color);
            expect(result).toEqual(expected);
        });
        it("Should return [[0, 0, 0], [0, 0, 0]] for [[0, 0, 0], [0, 0, 0]], 0, 0, 0", () => {
            let image = [[0, 0, 0], [0, 0, 0]];
            let sr = 0;
            let sc = 0;
            let color = 0;
            let expected = [[0, 0, 0], [0, 0, 0]];
            let result = floodFill(image, sr, sc, color);
            expect(result).toEqual(expected);
        });
    });
});
