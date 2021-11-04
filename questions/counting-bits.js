/**
 * @param {number} n - a positive integer
 * @return {number}
 */

const hammingWeight = (n) => {
    let str = n.toString(2);
    let result = 0;
    
    for (let i = 0; i < str.length; i++) {
        if (str[i] === '1') { 
            result++
        };  
    }
    
    return result;
};
