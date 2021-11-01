/**
 * @param {number[]} nums
 * @return {boolean}
 */

/** Problem has many solutions. The shortest is solution with Set. 
 * Set contains only unique elements, so we create new Set from array 
 * and compare their lengths.
 * If they have same lengths, array doesn't contain duplicates.
 */

 const containsDuplicate = (nums) => new Set(nums).size !== nums.length;