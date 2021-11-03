/**
 * @param {number[]} nums
 * @return {number}
 */

/**
 * Solution: in every iteration we check, if `currentSum` less than `currentSum + currentElement`, it means we don't need 
 * previous part of array, so we can change our start point to `currentElement`. And on every iteration we also try to update 
 * our `max` value.
 * Example: 
 * Input: [-1, 4, 2, -5]
 * Step 1: currentSumm is -1, currentMaxSumm is -1 too
 * Step 2: 4 + (-1) more than 4 ? No. So we have to uppdate our start point, now it's a 4. CurrentSum is 4, currentMaxSum = 4
 * Step 3: 4 + 2 more than 4? Yes. Update currentSum (6) and currentMaxSum (6)
 * Step 4: 6 more that 6 + (-5). No. We'll do nothing. 6 + (-5) is less than currentSum and currentMaxSum
 * Answer: 6
 */

const maxSubArray = (nums) => {
    if (nums.length === 1) return nums[0];
    
    let max = nums[0];
    let sum = nums[0];
    
    for (let i = 1; i < nums.length; i++) {
        sum = Math.max(sum + nums[i], nums[i]);
        max = Math.max(sum, max)
    } 
    
    return max;
};
