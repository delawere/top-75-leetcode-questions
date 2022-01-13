/**
 * @param {number[]} nums
 * @return {number[]}
 */
const productExceptSelf = function (nums) {
  let zeroCount = 0;
  let product = 1;
  let n = nums.length;

  for (let value of nums) {
    if (zeroCount > 1) {
      break;
    }
    if (value === 0) {
      zeroCount++;
    } else {
      product *= value;
    }
  }

  if (zeroCount > 1) {
    for (let i = 0; i < n; i++) {
      nums[i] = 0;
    }
    return nums;
  }

  for (let i = 0; i < n; i++) {
    if (zeroCount === 1) {
      if (nums[i] !== 0) {
        nums[i] = 0;
      } else {
        nums[i] = product;
      }
    } else {
      nums[i] = product / nums[i];
    }
  }

  return nums;
};
