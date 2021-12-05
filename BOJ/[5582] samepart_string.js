// https://www.acmicpc.net/problem/5582 [공통 부분 문자열]

const inputs = require('fs')
    .readFileSync(
        process.platform === 'linux' ? 'dev/stdin' : 'input.txt'
    )
    .toString()
    .trim()
    .split('\n');

let str1 = inputs[0];
let str2 = inputs[1];
const len1 = str1.length;
const len2 = str2.length;
let dp = Array.from(Array(len1 + 1), () => Array(len2 + 1).fill(0));
let answer = 0;

for (let i = 1; i <= len1; i++) {
    for (let j = 1; j <= len2; j++) {
        if (str1[i - 1] === str2[j - 1])
            dp[i][j] = dp[i - 1][j - 1] + 1; //대각선에 있는 값 + 1
        answer = Math.max(answer, dp[i][j]); //일치하는 문자열 최대 길이 갱신.
    }
}

console.log(answer);
