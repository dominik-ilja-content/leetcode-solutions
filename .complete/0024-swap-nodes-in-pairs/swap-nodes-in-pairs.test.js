const swapPairs = require("./swap-nodes-in-pairs");
const { createSinglyLinkedList } = require("../../data_structures/LinkedList");

describe("tests for leecode 24 - swap nodes in pairs", () => {
    describe("should return correct result for different inputs", () => {
        it("Should return [1] for [1]", () => {
            let list = createSinglyLinkedList([1]);
            let expected = createSinglyLinkedList([1]);
            let result = swapPairs(list);
            expect(result).toEqual(expected);
        });
        it("Should return [2, 1] for [1, 2]", () => {
            let list = createSinglyLinkedList([1, 2]);
            let expected = createSinglyLinkedList([2, 1]);
            let result = swapPairs(list);
            expect(result).toEqual(expected);
        });
        it("Should return [2, 1, 3] for [1, 2, 3]", () => {
            let list = createSinglyLinkedList([1, 2, 3]);
            let expected = createSinglyLinkedList([2, 1, 3]);
            let result = swapPairs(list);
            expect(result).toEqual(expected);
        });
        it("Should return [2, 1, 4, 3] for [1, 2, 3, 4]", () => {
            let list = createSinglyLinkedList([1, 2, 3, 4]);
            let expected = createSinglyLinkedList([2, 1, 4, 3]);
            let result = swapPairs(list);
            expect(result).toEqual(expected);
        });
        it("Should return [2, 1, 4, 3, 5] for [1, 2, 3, 4, 5]", () => {
            let list = createSinglyLinkedList([1, 2, 3, 4, 5]);
            let expected = createSinglyLinkedList([2, 1, 4, 3, 5]);
            let result = swapPairs(list);
            expect(result).toEqual(expected);
        });
    });
});
