/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

/** Solution: according to the condition, array must contains only one valid answer,
 * therefore if array have only two elements, that pair is a right answer, so we just return [0, 1]
 * if not, we create `hash` object, that keeps previous elements and in object key is a element, value is a index
 * In every iteration of loop, we check, if hash object has number equals `target - currentElement` is a right answer. 
*/

const twoSum = (nums, target) => {
    if (nums.length === 2) {
        return [0, 1]    
    }
    
    const hash = {};
    
    for (let i = 0; i < nums.length; i++) {
        // We must check on undefined, not just all falsy values, because value (index) can be equal zero
        if (hash[target - nums[i]] !== undefined) {
            return [hash[target - nums[i]], i];
        }
        hash[nums[i]] = i;
    }
};
