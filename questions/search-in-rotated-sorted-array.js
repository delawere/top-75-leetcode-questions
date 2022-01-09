/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let root = -1;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] < nums[i - 1]) {
            root = i;
            break;
        }
    }
    
    if (root === -1) {
        return bin(0, nums.length - 1);
    }
    
    function bin(start, end) {
        let root = Math.floor((start + end) / 2);
        if (nums[root] === target) {
            return root;
        }
        if (start === end) {
            return -1;
        }
        if (nums[root] > target) {
            return bin(start, root);
        } else {
            return bin(root + 1, end);
        }
    }
    
    let r1 = bin(0, root - 1);
    if (r1 !== -1) {
        return r1;
    }
    let r2 = bin(root, nums.length - 1);
    if (r2 !== -1) {
        return r2;
    }
    
    return -1;
};
