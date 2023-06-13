const {
  TreeNode,
  createBinaryTree,
} = require("../../../data_structures/Trees");

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var averageOfLevels = function (root) {
  const output = [];
  const queue = [root];
  let levelNodes = 1;
  let nullNodes = 0;
  let childNodes = 2;
  let visitedNodes = 0;
  let levelSum = 0;

  while (queue.length > 0) {
    const node = queue.shift();
    visitedNodes += 1;
    levelSum += node.val;

    if (node.left !== null) {
      queue.push(node.left);
    } else {
      nullNodes += 1;
    }
    if (node.right !== null) {
      queue.push(node.right);
    } else {
      nullNodes += 1;
    }

    if (visitedNodes === levelNodes) {
      output.push(levelSum / levelNodes);

      levelNodes = childNodes - nullNodes;
      levelSum = 0;
      visitedNodes = 0;
      nullNodes = nullNodes * 2;
      childNodes = childNodes * 2;
    }
  }

  return output;
};

let tree = createBinaryTree([1, 2, null, 3, 4]);
tree = createBinaryTree([
  970,
  953,
  null,
  945,
  null,
  944,
  null,
  928,
  null,
  793,
  null,
  892,
  null,
  887,
  null,
  887,
  null,
  878,
  null,
  852,
  null,
  837,
  null,
  830,
  844,
  828,
  null,
  null,
  null,
  818,
  null,
  898,
  null,
  775,
  null,
  774,
  null,
  725,
  null,
  685,
  null,
  673,
  null,
  646,
  null,
  598,
  null,
  583,
  null,
  531,
  null,
  516,
  null,
  511,
  null,
  431,
  512,
  429,
  476,
  null,
  null,
  427,
  null,
  null,
  null,
  404,
  null,
  367,
  null,
  325,
  null,
  323,
  null,
  -406,
  null,
  285,
  null,
  258,
  null,
  230,
  null,
  229,
  null,
  205,
  null,
  163,
  null,
  144,
  null,
  106,
  null,
  96,
  null,
  80,
  null,
  71,
  null,
  50,
  null,
  -20,
  null,
  -51,
  null,
  -62,
  null,
  -67,
  null,
  -70,
  null,
  -125,
  null,
  -152,
  null,
  -156,
  null,
  -164,
  null,
  -191,
  null,
  -203,
  null,
  -224,
  null,
  -251,
  null,
  -278,
  null,
  -279,
  null,
  -332,
  null,
  -371,
  null,
  297,
  null,
  -422,
  null,
  -425,
  null,
  -433,
  null,
  -440,
  null,
  -446,
  null,
  -672,
  null,
  -504,
  null,
  -534,
  null,
  -549,
  null,
  -553,
  null,
  -566,
  null,
  -832,
  null,
  -606,
  null,
  -609,
  null,
  -617,
  null,
  -650,
  null,
  -656,
  null,
  -663,
  null,
  -488,
  null,
  -675,
  null,
  -697,
  null,
  -703,
  null,
  -718,
  null,
  -730,
  null,
  -731,
  null,
  -747,
  null,
  -765,
  null,
  -807,
  null,
  -819,
  null,
  -591,
  null,
  -899,
  null,
  -907,
]);
let result = averageOfLevels(tree);
console.log(result);
let result2 = [
  970, 953, 945, 944, 928, 793, 892, 887, 887, 878, 852, 837, 837, 828, 818,
  898, 775, 774, 725, 685, 673, 646, 598, 583, 531, 516, 511, 471.5, 452.5, 427,
  404, 367, 325, 323, -406, 285, 258, 230, 229, 205, 163, 144, 106, 96, 80, 71,
  50, -20, -51, -62, -67, -70, -125, -152,
];
let expected = [
  970.0, 953.0, 945.0, 944.0, 928.0, 793.0, 892.0, 887.0, 887.0, 878.0, 852.0,
  837.0, 837.0, 828.0, 818.0, 898.0, 775.0, 774.0, 725.0, 685.0, 673.0, 646.0,
  598.0, 583.0, 531.0, 516.0, 511.0, 471.5, 452.5, 427.0, 404.0, 367.0, 325.0,
  323.0, -406.0, 285.0, 258.0, 230.0, 229.0, 205.0, 163.0, 144.0, 106.0, 96.0,
  80.0, 71.0, 50.0, -20.0, -51.0, -62.0, -67.0, -70.0, -125.0, -152.0, -156.0,
  -164.0, -191.0, -203.0, -224.0, -251.0, -278.0, -279.0, -332.0, -371.0, 297.0,
  -422.0, -425.0, -433.0, -440.0, -446.0, -672.0, -504.0, -534.0, -549.0,
  -553.0, -566.0, -832.0, -606.0, -609.0, -617.0, -650.0, -656.0, -663.0,
  -488.0, -675.0, -697.0, -703.0, -718.0, -730.0, -731.0, -747.0, -765.0,
  -807.0, -819.0, -591.0, -899.0, -907.0,
];

for (let i = 0; i < expected.length; i++) {
  if (result[i] !== expected[i]) {
    console.log({ index: i, result: result[i], expected: expected[i] });
  }
}

module.exports = averageOfLevels;
