const addTwoNumbers = require("./add-two-numbers");
const { createSinglyLinkedList } = require("../../data_structures/LinkedList");

describe("tests for leecode 2 - add two numbers", () => {
  describe("should return correct result for different inputs", () => {
    it("should return [7, 0, 8] for l1 of [2, 4, 3] & l2 of [5, 6, 4]", () => {
      let l1 = createSinglyLinkedList([2, 4, 3]);
      let l2 = createSinglyLinkedList([5, 6, 4]);
      let expected = createSinglyLinkedList([7, 0, 8]);
      let result = addTwoNumbers(l1, l2);
      expect(result).toEqual(expected);
    });
    it("should return [0] for l1 of [0] & l2 of [0]", () => {
      let l1 = createSinglyLinkedList([0]);
      let l2 = createSinglyLinkedList([0]);
      let expected = createSinglyLinkedList([0]);
      let result = addTwoNumbers(l1, l2);
      expect(result).toEqual(expected);
    });
    it("should return [8, 9, 9, 9, 0, 0, 0, 1] for l1 of [9, 9, 9, 9, 9, 9, 9] & l2 of [9, 9, 9, 9]", () => {
      let l1 = createSinglyLinkedList([9, 9, 9, 9, 9, 9, 9]);
      let l2 = createSinglyLinkedList([9, 9, 9, 9]);
      let expected = createSinglyLinkedList([8, 9, 9, 9, 0, 0, 0, 1]);
      let result = addTwoNumbers(l1, l2);
      expect(result).toEqual(expected);
    });
  });
});
