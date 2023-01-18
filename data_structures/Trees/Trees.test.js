const { createBinaryTree, TreeNode: TN } = require("./Trees");

describe("Tests for createBinaryTree function", () => {
  test("Returns null if an empty array is passed", () => {
    expect(createBinaryTree([])).toBe(null);
  });
  test("Returns null if null is first array element", () => {
    expect(createBinaryTree([null])).toBe(null);
    expect(createBinaryTree([null, null])).toBe(null);
    expect(createBinaryTree([null, 1])).toBe(null);
  });
  test("Able to create tree from single element", () => {
    expect(createBinaryTree([1])).toEqual(new TN(1));
  });
  test("Able to create two layer tree", () => {
    let tree = new TN(1, new TN(2), new TN(3));
    expect(createBinaryTree([1, 2, 3])).toEqual(tree);
  });
  test("Able to create tree with null leaves", () => {
    let tree = new TN(1);
    tree.right = new TN(3);
    expect(createBinaryTree([1, null, 3])).toEqual(tree);
  });
  test("Able to create tree from multiple elements", () => {
    let tree = new TN(1, new TN(2), new TN(3));
    expect(createBinaryTree([1, 2, 3])).toEqual(tree);

    tree = new TN(5, new TN(1), new TN(4, new TN(3), new TN(6)));
    expect(createBinaryTree([5, 1, 4, null, null, 3, 6])).toEqual(tree);

    tree = new TN(5, new TN(4), new TN(6, new TN(3), new TN(7)));
    expect(createBinaryTree([5, 4, 6, null, null, 3, 7])).toEqual(tree);
  });
  test("Able to create multiple layers with null leaves", () => {
    let tree = new TN(1);
    tree.right = new TN(3);
    tree.right.right = new TN(4);
    expect(createBinaryTree([1, null, 3, null, 4])).toEqual(tree);

    tree = new TN(1);
    tree.left = new TN(1);
    tree.left.left = new TN(1);
    tree.left.left.left = new TN(1);
    tree.left.left.left.left = new TN(1);
    expect(createBinaryTree([1, 1, null, 1, null, 1, null, 1, null])).toEqual(
      tree
    );
  });
});
