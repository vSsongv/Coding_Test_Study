// https://leetcode.com/problems/palindromic-substrings/

var countSubstrings = function (s) {
  let answer = 0;
  const len = s.length;
  const dp = Array.from(Array(len), () => Array(len).fill(0));

  for (let i = 0; i < len; i++) dp[i][i] = 1;
  //앞 뒤가 같고 가운데가 1일때(펠린드롬일때)
  for (let i = 1; i < len; i++) {
    for (let j = i; j < len; j++) {
      if (s[j - i] === s[j]) {
        dp[j - i][j] = dp[j - i + 1][j - 1] + 1;
      } else {
        dp[j - i][j] = 0;
      }
    }
  }
  //   console.log(dp);
  return answer + len * 1;
};

console.log(countSubstrings('abc'));
console.log(countSubstrings('aaa'));
console.log(countSubstrings('fdsklf'));
