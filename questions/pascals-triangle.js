/**
 * @param {number} numRows
 * @return {number[][]}
 */

const generate = function(numRows) {
    if (!numRows) return [];
    
    let result = [[1]];
    let cursor = 1;
    
    while (cursor < numRows) {
        let current = [];
        let prev = result[cursor - 1];
        
        for (let i = 0; i <= cursor; i++) {
            if (i === cursor) {
                current.push(prev[i - 1]);
                continue;
            }
            current.push(prev[i] + (prev[i - 1] || 0));
        }
        
        result.push(current);
        cursor++;
    }
    
    return result;
};
