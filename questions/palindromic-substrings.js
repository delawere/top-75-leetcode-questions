/**
 * @param {string} s
 * @return {number}
 */

/* BRUTFORCE SOLUTION!!! Very slow ~ O(n ^ 3)*/

const isPalindrome = (s) => {
    let reversed = '';
    
    for (let i = s.length - 1; i >= 0; i--) {
       reversed += s[i]
    }
    
    return s === reversed
}

const countSubstrings = function(s) {
    let result = 0;
    
    for (let i = 0; i < s.length; i++) {
        for (let j = i; j < s.length; j++) {
            if (isPalindrome(s.slice(i, j + 1))) {
                result++;
            }
        }
    }
    
    return result;
};
