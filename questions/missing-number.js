/**
 * @param {number[]} nums
 * @return {number}
 */
const missingNumber = (nums) => {
  let expectedSum = Array(nums.length + 1).fill(0).reduce((acc, _it, i) => {
    acc = acc + i;
    return acc;
  }, 0)
    
  let realSum = nums.reduce((acc, item) => {
    acc = acc + item;
    return acc;
  }, 0)
    
  return expectedSum - realSum;
};
