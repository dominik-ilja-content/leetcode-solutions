const addTwoNumbers = require("./add-two-numbers");
const {
  createSinglyLinkedList,
} = require("../../../data_structures/LinkedList");

/*
    The number of nodes in each linked list is in the range [1, 100].
    0 <= Node.val <= 9
    It is guaranteed that the list represents a number that does not have leading zeros.
*/

describe("tests for leecode 2 - add two numbers", () => {
  describe("should return correct result for different inputs", () => {
    it("should return a linked list of [7, 0, 8] for l1 = [2, 4, 3] and l2 = [5, 6, 4]", () => {
      let l1 = createSinglyLinkedList([2, 4, 3]);
      let l2 = createSinglyLinkedList([5, 6, 4]);
      let expected = createSinglyLinkedList([7, 0, 8]);
      let result = addTwoNumbers(l1, l2);
      expect(result).toEqual(expected);
    });
    it("should return a linked list of [0] for l1 = [0] and l2 = [0]", () => {
      let l1 = createSinglyLinkedList([0]);
      let l2 = createSinglyLinkedList([0]);
      let expected = createSinglyLinkedList([0]);
      let result = addTwoNumbers(l1, l2);
      expect(result).toEqual(expected);
    });
    it("should return a linked list of [8, 9, 9, 9, 0, 0, 0, 1] for l1 = [9, 9, 9, 9, 9, 9, 9] and l2 = [9, 9, 9, 9]", () => {
      let l1 = createSinglyLinkedList([9, 9, 9, 9, 9, 9, 9]);
      let l2 = createSinglyLinkedList([9, 9, 9, 9]);
      let expected = createSinglyLinkedList([8, 9, 9, 9, 0, 0, 0, 1]);
      let result = addTwoNumbers(l1, l2);
      expect(result).toEqual(expected);
    });
  });
});
