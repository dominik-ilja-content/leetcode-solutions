const removeNodes = require("./remove-nodes-from-linked-list");
const { createSinglyLinkedList } = require("../../data_structures/LinkedList");

describe("tests for leetcode 2487 - remove nodes from linked list", () => {
  describe("cases wherer list should be returned unaltered", () => {
    it("should return an unaltered list if only one node is in the list", () => {
      let list = createSinglyLinkedList([1]);
      let result = removeNodes(list);
      let expected = createSinglyLinkedList([1]);
      expect(result).toEqual(expected);
    });
    it("should return an unaltered list when all node values descend in value from head", () => {
      let list = createSinglyLinkedList([2, 1]);
      let result = removeNodes(list);
      let expected = createSinglyLinkedList([2, 1]);
      expect(result).toEqual(expected);

      list = createSinglyLinkedList([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]);
      result = removeNodes(list);
      expected = createSinglyLinkedList([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]);
      expect(result).toEqual(expected);
    });
    it("should return an unaltered list when all node values are the same", () => {
      let list = createSinglyLinkedList([2, 2, 2, 2, 2]);
      let result = removeNodes(list);
      let expected = createSinglyLinkedList([2, 2, 2, 2, 2]);
      expect(result).toEqual(expected);
    });
  });
  it("should return only the last node when all nodes ascend in value from the head", () => {
    let list = createSinglyLinkedList([1, 2]);
    let result = removeNodes(list);
    let expected = createSinglyLinkedList([2]);
    expect(result).toEqual(expected);

    list = createSinglyLinkedList([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    result = removeNodes(list);
    expected = createSinglyLinkedList([10]);
    expect(result).toEqual(expected);
  });
  it("should return correct results for lists of varying values", () => {
    let list = createSinglyLinkedList([3, 1, 2]);
    let result = removeNodes(list);
    let expected = createSinglyLinkedList([3, 2]);
    expect(result).toEqual(expected);

    list = createSinglyLinkedList([10, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    result = removeNodes(list);
    expected = createSinglyLinkedList([10, 10]);
    expect(result).toEqual(expected);

    list = createSinglyLinkedList([5, 2, 13, 3, 8]);
    result = removeNodes(list);
    expected = createSinglyLinkedList([13, 8]);
    expect(result).toEqual(expected);
  });
});
