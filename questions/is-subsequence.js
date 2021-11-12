/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

const isSubsequence = function(s, t) {
    let current = '';
    
    for (let i = 0; i < t.length; i++) {
        if (s.substring(current.length)[0] === t[i]) {
            current += t[i];
        }    
    }

    return current === s;
};
