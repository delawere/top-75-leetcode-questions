/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
const longestCommonSubsequence = function(text1, text2) {
    const memo = [];
    
    for (let i = 0; i < text1.length; i++) {
        memo.push(new Array(text2.length).fill(0))
    }
    
    for (let i = 0; i < text1.length; i++) {
        const current1 = text1[i];
        for (let j = 0; j < text2.length; j++) {
            const current2 = text2[j];
            
            if (current1 !== current2) {
                const left = j !== 0 ? memo[i][j - 1] : 0;
                const top = i !== 0 ? memo[i - 1][j] : 0;
                memo[i][j] = Math.max(left, top);
            } else {
                const prev = i !== 0 && j !== 0 ? memo[i - 1][j - 1] : 0;
                memo[i][j] = prev + 1;
            }
        }
    }
    
    return memo[text1.length - 1][text2.length - 1];
};
