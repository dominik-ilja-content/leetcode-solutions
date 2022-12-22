const mergeTwoLists = require("./merge-two-sorted-lists");
const { createSinglyLinkedList } = require("../../data-structures/LinkedList");

describe("tests for leetcode 21 - merge two lists", () => {
  test("should return null when both lists are empty", () => {
    const list1 = createSinglyLinkedList([]);
    const list2 = createSinglyLinkedList([]);
    const result = mergeTwoLists(list1, list2);
    const expected = null;

    expect(result).toEqual(expected);
  });
  test("should return sorted list when one list is empty and the other is not", () => {
    let list1 = createSinglyLinkedList([]);
    let list2 = createSinglyLinkedList([0]);
    let result = mergeTwoLists(list1, list2);
    let expected = createSinglyLinkedList([0]);

    expect(result).toEqual(expected);

    list1 = createSinglyLinkedList([]);
    list2 = createSinglyLinkedList([0, 1, 2]);
    result = mergeTwoLists(list1, list2);
    expected = createSinglyLinkedList([0, 1, 2]);

    expect(result).toEqual(expected);
  });
  test("should return sorted list when both lists have values", () => {
    let list1 = createSinglyLinkedList([1, 2, 4]);
    let list2 = createSinglyLinkedList([1, 3, 4]);
    let result = mergeTwoLists(list1, list2);
    let expected = createSinglyLinkedList([1, 1, 2, 3, 4, 4]);

    expect(result).toEqual(expected);

    list1 = createSinglyLinkedList([1, 2, 3, 4]);
    list2 = createSinglyLinkedList([5, 6, 7, 8]);
    result = mergeTwoLists(list1, list2);
    expected = createSinglyLinkedList([1, 2, 3, 4, 5, 6, 7, 8]);

    expect(result).toEqual(expected);
  });
});
