/**
 * @param {number[]} nums
 * @return {number}
 */
const findMin = function (nums) {
  let start = 0;
  let end = nums.length - 1;

  while (end - start > 1) {
    let rootIndex = Math.floor((start + end) / 2);
    let root = nums[rootIndex];
    if (root < nums[rootIndex - 1]) {
      return root;
    }
    if (root > nums[start] && root > nums[end]) {
      start = rootIndex;
    } else {
      end = rootIndex;
    }
  }

  return Math.min(nums[start], nums[end]);
};
