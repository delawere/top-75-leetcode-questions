/**
 * @param {string} s
 * @return {boolean}
 */

/** Solution: we create an object that contains all possible types of brackets in format: 
 * [Key is an open bracket]: [Value is a close bracket]; For example: '{': '}'.
 * For every character in string we go to check: 
 * If it's an open bracket -> push to the array.
 * If not, it's mean that is a close bracket. So we have to equal last bracket in array and current bracket.
 * If they are equal, then it's correct use of brackets. If not return false.
 * Example:
 * Input string '{[]}'
 * Step 1: is a open bracket? Yes. Push to the hash. Hash is equal ['}'];
 * Step 2: is a open bracket? Yes. Push to the hash. Hash is equal ['}', ']']; 
 * Step 3: is a open bracket? No. We go to delete last element from hash and return. Last element is equal ']'.
 *         Current element is equal last element from hash? Yes. Therefore it was correct use of brackets.
 * Step 4: is a open bracket? No. We go to delete last element from hash and return. Last element is equal '}'.
 *         Current element is equal last element from hash? Yes. Therefore it was correct use of brackets.
 * Last step: we don't have elements if array, so all brackets was closed and result is true. 
 */

const isValid = (s) => {
    const brackets = {
        '(': ')',
        '[': ']',
        '{': '}',
    }
    
    const hash = [];
    for (let char of s) {
        if (brackets[char]) {
            hash.push(brackets[char])
        } else {
            if (hash.pop() !== char) return false
        }
    }
    
    // Return !hash.length = true, because all brackets was closed correctly, therefore hash array is empty;
    // If string had odd count of brackets, array would contains one unessasary bracket. 
    return !hash.length;
};
