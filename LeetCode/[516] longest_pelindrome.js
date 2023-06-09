// https://leetcode.com/problems/longest-palindromic-subsequence/

// var longestPalindromeSubseq = function (s) {
//   const dp = [];

//   for (let i = s.length - 1; i >= 0; i--) {
//     dp[i] = Array(s.length).fill(0);
//     for (let j = i; j < s.length; j++) {
//       if (i - j === 0) dp[i][j] = 1;
//       else if (s[i] === s[j]) {
//         dp[i][j] = dp[i + 1][j - 1] + 2;
//       } else {
//         dp[i][j] = Math.max(dp[i][j - 1], dp[i + 1][j]);
//       }
//     }
//   }

//   return dp[0][s.length - 1];
// };

var longestPalindromeSubseq = function (s) {
  const len = s.length;
  const dp = Array.from(Array(len), () => Array(len).fill(0));

  for (let i = 0; i < len; i++) dp[i][i] = 1;
  for (let i = 1; i < len; i++) dp[i - 1][i] = s[i - 1] === s[i] ? 2 : 1;

  for (let i = 2; i < len; i++) {
    for (let j = i; j < len; j++) {
      if (s[j - i] === s[j]) {
        dp[j - i][j] = dp[j - i + 1][j - 1] + 2;
      } else {
        dp[j - i][j] = Math.max(dp[j - i + 1][j], dp[j - i][j - 1]);
      }
    }
  }
  return dp[0][len - 1];
};

console.log(longestPalindromeSubseq('bbbab'));
console.log(longestPalindromeSubseq('cbbd'));
