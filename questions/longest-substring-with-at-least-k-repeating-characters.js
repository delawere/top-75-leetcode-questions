/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
const longestSubstring = function(s, k) {
    const hash = {};
    
    for (let char of s) {
        if (hash[char]) {
            hash[char] = hash[char] + 1;
        } else {
            hash[char] = 1;
        }
    }
    
    let count = 0;
    
    for (let i = 0; i < s.length; i++) {
        if (hash[s[i]] < k) {
            return Math.max(longestSubstring(s.slice(0, i), k), longestSubstring(s.slice(i + 1, s.length), k));
        } else {
            count++;
        }
    }
    
    return count;
};
