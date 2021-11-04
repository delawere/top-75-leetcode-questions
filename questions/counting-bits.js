/**
 * @param {number} n
 * @return {number[]}
 */

const countBits = (n) => {
  let result = [];
    
  for (let i = 0; i <= n; i++) {
    let str = i.toString(2);
      result.push(
        str.split('').filter(it => it === '1').length
      )
  }
    
  return result;
};
