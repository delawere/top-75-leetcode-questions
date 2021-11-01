// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/submissions/
/** Solution */
/**  We start from the first element as the `Best choice for buying` and try to 
 * find the biggest difference between `buy` and current element in iteration. If we found
 * an element that less than our `buy` we will update `buy`. 
 * And in every iteration we check and update if needed the `result` that represent 
 * the biggest difference. */

/**
 * @param {number[]} prices
 * @return {number}
 */
 const maxProfit = (prices) => {
    // Handle edge cases
    if (prices.length === 0 || prices.length === 1) return 0;    
    
    // Buy at first day
    let buy = prices[0];

    // Calculate profit if we bought stock at first day and sell immediately
    let result = 0;
    
    // Start from 1, because already known result for first element
    for (let i = 1; i < prices.length; i++) {
        // If we found element less than current `buy` we should update `buy` value
        // Now it's a new best price for buying
        if (prices[i] < buy) {
            buy = prices[i];
        // If not, we calculate the difference between current element and `buy`. If it's bigger
        // than current `result`, we should update `result` value.
        } else {
            result = Math.max(result, prices[i] - buy);
        }
    }
    
    return result;
};