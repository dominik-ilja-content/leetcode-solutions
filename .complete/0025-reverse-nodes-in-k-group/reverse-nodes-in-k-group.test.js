const reverseKGroup = require("./reverse-nodes-in-k-group");
const {
  createSinglyLinkedList,
} = require("../../../data_structures/LinkedList");

describe("tests for leecode 25 - reverse nodes in k-group", () => {
  it("should return the list if k is 1", () => {
    let list = createSinglyLinkedList([1, 2, 3]);
    let expected = list;
    let result = reverseKGroup(list, 1);
    expect(result).toBe(expected);
  });
  it("should return the list if k is greater than list length", () => {
    let list = createSinglyLinkedList([1, 2, 3]);
    let expected = list;
    let result = reverseKGroup(list, 10);
    expect(result).toBe(expected);
  });
  it("should work", () => {
    let list = createSinglyLinkedList([1, 2, 3]);
    let expected = createSinglyLinkedList([2, 1, 3]);
    let result = reverseKGroup(list, 2);
    expect(result).toEqual(expected);

    list = createSinglyLinkedList([1, 2, 3, 4, 5]);
    expected = createSinglyLinkedList([2, 1, 4, 3, 5]);
    result = reverseKGroup(list, 2);
    expect(result).toEqual(expected);

    list = createSinglyLinkedList([1, 2, 3, 4, 5]);
    expected = createSinglyLinkedList([3, 2, 1, 4, 5]);
    result = reverseKGroup(list, 3);
    expect(result).toEqual(expected);

    list = createSinglyLinkedList([1, 2, 3, 4, 5]);
    expected = createSinglyLinkedList([4, 3, 2, 1, 5]);
    result = reverseKGroup(list, 4);
    expect(result).toEqual(expected);

    list = createSinglyLinkedList([1, 2, 3, 4, 5]);
    expected = createSinglyLinkedList([5, 4, 3, 2, 1]);
    result = reverseKGroup(list, 5);
    expect(result).toEqual(expected);

    list = createSinglyLinkedList([1, 2, 3, 4, 5, 6]);
    expected = createSinglyLinkedList([2, 1, 4, 3, 6, 5]);
    result = reverseKGroup(list, 2);
    expect(result).toEqual(expected);
  });
});
