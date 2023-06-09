// https://leetcode.com/problems/partition-array-into-disjoint-intervals/submissions/

// const partitionDisjoint = (nums) => {
//   const len = nums.length;

//   const max = [];
//   max[0] = Number.MIN_SAFE_INTEGER;
//   const min = [];
//   min[0] = Number.MAX_SAFE_INTEGER;

//   for (let i = 0; i < len - 1; i++) {
//     max[i + 1] = Math.max(max[i], nums[i]);
//     min[i + 1] = Math.min(min[i], nums[len - 1 - i]);
//   }

//   console.log(max, min);

//   let answer = 0;
//   for (let i = 1; i < len; i++) {
//     const start = max[i];
//     const end = min[len - i];
//     if (start <= end) {
//       answer = i;
//       break;
//     }
//   }
//   return answer;
// };

const partitionDisjoint = (nums) => {
  let n = nums.length;
  let MinArr = Array(n).fill(0);
  MinArr[n - 1] = nums[n - 1];

  for (let i = n - 2; i >= 0; i--) {
    MinArr[i] = Math.min(MinArr[i + 1], nums[i]);
  }

  let currMax = nums[0];
  for (let i = 1; i < n; i++) {
    currMax = Math.max(currMax, nums[i - 1]);
    if (currMax <= MinArr[i]) return i;
  }
};

console.log(partitionDisjoint([5, 0, 3, 8, 6]));
console.log(partitionDisjoint([1, 1, 1, 0, 6, 12]));
