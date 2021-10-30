// https://www.acmicpc.net/problem/18353 [병사 배치하기]

// let path = '/dev/stdin';
let path = "input.txt";

const [n, ...arr] = require('fs').readFileSync(path).toString().trim().split(/\s+/).map(v => +v);

let dp = new Array(n + 1).fill(1);
arr.reverse();
//최대 부분 증가수열
for (let i = 1; i < n; i++) {
    for (let j = 0; j <= i; j++) {
        if (arr[i] > arr[j]) {
            dp[i] = Math.max(dp[i], dp[j] + 1);
        }
    }
}

let ans = 0;
for (let i = 0; i <= n; i++) {
    ans = Math.max(ans, dp[i]);
}
console.log(n - ans); //n명의 병사에서 제외되는 병사는 n-최대부분 증가수열의 길이
