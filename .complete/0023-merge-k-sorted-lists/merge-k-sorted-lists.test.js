const mergeKLists = require("./merge-k-sorted-lists");
const { createSinglyLinkedList } = require("../../data_structures/LinkedList");

describe("tests for leecode 23 - merge k sorted lists", () => {
  it("should return null for an empty list", () => {
    let list = [];
    let expected = null;
    let result = mergeKLists(list);
    expect(result).toBe(expected);
  });
  it("should return null if all lists are null", () => {
    let list = [null];
    let expected = null;
    let result = mergeKLists(list);
    expect(result).toBe(expected);

    list = [null, null, null, null, null];
    expected = null;
    result = mergeKLists(list);
    expect(result).toBe(expected);
  });
  it("should work with lists of same length", () => {
    let list = [
      createSinglyLinkedList([1]),
      createSinglyLinkedList([2]),
      createSinglyLinkedList([3]),
    ];
    let expected = createSinglyLinkedList([1, 2, 3]);
    let result = mergeKLists(list);
    expect(result).toEqual(expected);

    list = [
      createSinglyLinkedList([1, 2, 3, 4, 5]),
      createSinglyLinkedList([2, 3, 4, 5, 6]),
      createSinglyLinkedList([3, 4, 5, 6, 7, 8]),
    ];
    expected = createSinglyLinkedList([
      1, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 7, 8,
    ]);
    result = mergeKLists(list);
    expect(result).toEqual(expected);
  });
  it("should work with lists of varying length", () => {
    let list = [
      createSinglyLinkedList([1, 3, 5]),
      createSinglyLinkedList([2, 4]),
      createSinglyLinkedList([3]),
    ];
    let expected = createSinglyLinkedList([1, 2, 3, 3, 4, 5]);
    let result = mergeKLists(list);
    expect(result).toEqual(expected);

    list = [
      createSinglyLinkedList([1, 3, 5]),
      createSinglyLinkedList([2, 3, 4, 6, 8, 10, 12, 14, 16]),
      createSinglyLinkedList([3, 4, 5, 6, 7, 8]),
    ];
    expected = createSinglyLinkedList([
      1, 2, 3, 3, 3, 4, 4, 5, 5, 6, 6, 7, 8, 8, 10, 12, 14, 16,
    ]);
    result = mergeKLists(list);
    expect(result).toEqual(expected);
  });
});
