/**
 * @param {number[]} nums
 * @return {boolean}
 */
const canJump = function(nums) {
    for (let i = nums.length - 1; i >= 0;) {
        if (i === 0) return true;
        const target = nums[i];
        let nextStep = null;
        
        for (let j = i - 1; j >= 0; j--) {
            const current = nums[j];
            
            if (i - j <= current) {
                nextStep = j;
            }
        }
        if (nextStep === null) {
            return false;
        } else {
            i = nextStep;
        }
    }
    return false;
};
