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
 * @param {number} k
 * @return {number}
 */
const kthSmallest = function(root, k) {
    const stack = [root];
    let values = [];
    
    while (stack.length) {
        const current = stack.pop();
        if (!current) {
            continue;
        }
        stack.unshift(current.left || null);
        stack.unshift(current.right || null);
        values.push(current.val);
    }
    return values.sort((a, b) => a - b)[k - 1];
};
