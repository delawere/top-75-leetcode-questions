/**
 * @param {number} rowIndex
 * @return {number[]}
 */
const getRow = function(rowIndex) {
    let result = [[1]];
    
    if (!rowIndex) {
        return result[rowIndex];    
    }
    
    let cursor = 1;
    
    while (cursor <= rowIndex) {
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
    
    return result[rowIndex];
};
