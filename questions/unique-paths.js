/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */

const uniquePaths = (m, n) => {
    let row = Array(n).fill(1);
    let prevRow = Array(n).fill(0);
    let current = m;
    
    while (current > 1) {
        for (let i = row.length - 1; i >= 0; i--) {
            prevRow[i] = row[i];
            row[i] = (row[i + 1] || 0) + (prevRow[i] || 0); 
        }
        current--;
    }
    return row[0];
};
