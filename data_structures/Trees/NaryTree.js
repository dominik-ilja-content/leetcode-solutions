/**
 * @param {number} val
 * @param {NaryNode[]} children
 */
function NaryNode(val, children) {
  this.val = val;
  this.children = children;
}

function createNaryTree() {}

module.exports = {
  createNaryTree,
  NaryNode,
};
