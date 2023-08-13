const removeNthFromEnd = require("./remove-nth-node-from-end-of-list");
const { createSinglyLinkedList } = require("../../data_structures/LinkedList");

describe("tests for leecode 19 - remove nth node from end of list", () => {
  describe("should return correct result for different inputs", () => {
    it("Should return null for list of [1] & 1", () => {
      let list = createSinglyLinkedList([1]);
      let index = 1;
      let expected = null;
      let result = removeNthFromEnd(list, index);
      expect(result).toEqual(expected);
    });
    it("Should return [1] for list of [1, 2] & 1", () => {
      let list = createSinglyLinkedList([1]);
      let index = 1;
      let expected = null;
      let result = removeNthFromEnd(list, index);
      expect(result).toEqual(expected);
    });
    it("Should return [2] for list of [1, 2] & 2", () => {
      let list = createSinglyLinkedList([1]);
      let index = 1;
      let expected = null;
      let result = removeNthFromEnd(list, index);
      expect(result).toEqual(expected);
    });
    it("Should return [1, 2, 3, 5] for list of [1, 2, 3, 4, 5] & 2", () => {
      let list = createSinglyLinkedList([1, 2, 3, 4, 5]);
      let index = 2;
      let expected = createSinglyLinkedList([1, 2, 3, 5]);
      let result = removeNthFromEnd(list, index);
      expect(result).toEqual(expected);
    });
  });
});
