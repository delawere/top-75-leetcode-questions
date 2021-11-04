/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */

const getSum = (a, b) => {
  for (let i = 0; i < Math.abs(b); i++) {
    if (b < 0) {
      a--;
      continue;
    }
    a++;
  }
  return a;
};
