/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
const isValidBST = function(node, min = -Infinity, max = Infinity) {
  if (!node) return true;
  if (node.val >= max || node.val <= min) return false;
  return isValidBST(node.left, min, node.val) && isValidBST(node.right, node.val, max);

};
