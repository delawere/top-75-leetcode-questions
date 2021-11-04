/**
 * @param {string} s
 * @return {number}
 */

/**
 * Solution: In every iteration, we check, if current `frame` already includes the same character,
 * we go to delete first element of the frame, because we have to find substring, not subsequence.
 * If we would find subsequence, we can just delete the same character from `frame`.
 * When we'll get frame with only unique characters, we add new element to frame, and compare new 
 * frame length with current max value.
 * Total time: O(n * (time needed for includes))
 */

const lengthOfLongestSubstring = (s) => {
    if (!s) return 0;
    
    let frame = [];
    let max = 0;
  
    for (let i = 0; i < s.length; i++) {
      while (frame.includes(s[i])) {
        frame.shift();
      }
      frame.push(s[i]);
      max = Math.max(max, frame.length)
    }
  
    return max;
};
