// https://leetcode.com/problems/maximum-points-you-can-obtain-from-cards/

/**
 * @param {number[]} cardPoints
 * @param {number} k
 * @return {number}
 */
var maxScore = function (cardPoints, k) {
  let len = cardPoints.length;
  let diff = len % 2 ? len - k : len - k - 1;
  let total = cardPoints.reduce((sum, currValue) => sum + currValue, 0);
  if (len === k) return total;

  let minimum = Number.MAX_SAFE_INTEGER;
  let sum = 0;
  let right = 0;

  for (let left = 0; left < len; left++) {
    while (right < len && right - left !== diff) {
      sum += cardPoints[right++];
    }
    minimum = Math.min(sum, minimum);
    sum -= cardPoints[left];
    left += 1;
  }
  return total - minimum;
};

console.log(maxScore([100, 40, 17, 9, 73, 75], 3)); //248
console.log(maxScore([1, 2, 3, 4, 5, 6, 1], 3)); //12
console.log(maxScore([2, 2, 2], 2)); //4
console.log(maxScore([9, 7, 7, 9, 7, 7, 9], 7)); //55
