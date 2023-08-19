const mostCommonWord = require("./most-common-word");

describe("tests for leecode 819 - most common word", () => {
    describe("should return correct result for different inputs", () => {
        it("Should return 'ball' for 'Bob hit a ball, the hit BALL flew far after it was hit.' & ['hit']", () => {
            let paragraph = "Bob hit a ball, the hit BALL flew far after it was hit.";
            let banned = ["hit"];
            let expected = "ball";
            let result = mostCommonWord(paragraph, banned);
            expect(result).toBe(expected);
        });
        it("Should return 'a' for 'a.' & []", () => {
            let paragraph = "a.";
            let banned = [];
            let expected = "a";
            let result = mostCommonWord(paragraph, banned);
            expect(result).toBe(expected);
        });
        it("Should return 'bob' for 'Bob' & []", () => {
            let paragraph = "Bob";
            let banned = [];
            let expected = "bob";
            let result = mostCommonWord(paragraph, banned);
            expect(result).toBe(expected);
        });
    });
});
