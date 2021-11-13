/**
 * @param {number[]} nums
 * @return {number}
 */
const rob = (nums) => {
    if (nums.length === 0) return 0;
    if (nums.length === 1) return nums[0];
    if (nums.length === 2) return Math.max(nums[0], nums[1]);
    
    let arr = [nums[0], nums[1]];
    
    for (let i = 2; i < nums.length; i++) {
      let prev = arr[i - 3] || 0;
      let prevPrev = arr[i - 2] || 0;
      
      arr.push(Math.max(nums[i] + prev, nums[i] + prevPrev));
    }
    return Math.max(arr[arr.length - 1], arr[arr.length - 2])
};
