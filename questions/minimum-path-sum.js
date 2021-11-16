/**
 * @param {number[][]} grid
 * @return {number}
 */

const minPathSum = (grid) => {
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
           if (i === 0 && j === 0) {
             continue;
           }
           let top = grid[i][j] + (grid[i - 1] !== undefined ? grid[i - 1][j] : Infinity);
           let right = grid[i][j] + (grid[i][j - 1] !== undefined ? grid[i][j - 1] : Infinity);
           grid[i][j] = Math.min(top, right)
        }
    }
    return grid[grid.length - 1][grid[grid.length - 1].length - 1];
};
