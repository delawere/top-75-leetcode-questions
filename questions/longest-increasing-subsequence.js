/**
 * @param {number[]} nums
 * @return {number}
 */
const lengthOfLIS = function(nums) {
  const costs = Array(nums.length).fill(-Infinity);
  costs[0] = 1;
    
  for (let i = 1; i < nums.length; i++) {       
    for (let j = i - 1; j >= 0; j--) {
      if (nums[j] < nums[i]) {
        costs[i] = Math.max(costs[j] + 1, costs[i]); 
      }
    }
    if (costs[i] === -Infinity) {
      costs[i] = 1;
    }
  }
  
  return Math.max(...costs)
};
