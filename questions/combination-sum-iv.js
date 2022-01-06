/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 
const combinationSum4 = function(nums, target) {
    const memo = {};
    
    function recursion(current = 0) {
        let result = 0;
        if (current in memo) {
            return memo[current];
        }
        for (let value of nums) {
            const sum = current + value;
            if (sum === target) {
                result++;
                continue;
            }
            if (sum > target) {
                continue
            };
            if (sum < target) {
                result += recursion(sum);
            }
        }
        memo[current] = result;
        return result;
    }
    return recursion();
};
