const swapNodes = require("./swapping-nodes-in-a-linked-list");
const { createSinglyLinkedList } = require("../../data_structures/LinkedList");

/*
    Swap index cannot be greater than the length of the list
    Node values are between 0 & 100 inclusive
    List length is between 1 & 10^5 inclusive
*/

describe("tests for leecode 1721 - swapping nodes in a linked list", () => {
  it("should return an unaltered list if the list has a length of 1", () => {
    let list = createSinglyLinkedList([1]);
    let k = 1;
    let expected = createSinglyLinkedList([1]);
    let result = swapNodes(list, k);
    expect(result).toEqual(expected);
  });
  describe("should swap the first and last indexes", () => {
    it("should turn [1,2] into [2,1] when k is 1", () => {
      let list = createSinglyLinkedList([1, 2]);
      let expected = createSinglyLinkedList([2, 1]);
      let result = swapNodes(list, 1);
      expect(result).toEqual(expected);
    });
    it("should turn [1, 2, 3, 4, 5] into [5, 2, 3, 4, 1] when k is 5", () => {
      let list = createSinglyLinkedList([1, 2, 3, 4, 5]);
      let k = 5;
      let expected = createSinglyLinkedList([5, 2, 3, 4, 1]);
      let result = swapNodes(list, k);
      expect(result).toEqual(expected);
    });
  });
  describe("should swap the correct indexes", () => {
    it("should turn [7,9,6,6,7,8,3,0,9,5] into [7,9,6,6,8,7,3,0,9,5] when k is 5", () => {
      let list = createSinglyLinkedList([7, 9, 6, 6, 7, 8, 3, 0, 9, 5]);
      let k = 5;
      let expected = createSinglyLinkedList([7, 9, 6, 6, 8, 7, 3, 0, 9, 5]);
      let result = swapNodes(list, k);
      expect(result).toEqual(expected);
    });
  });
});
