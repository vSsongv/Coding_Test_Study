// https://www.acmicpc.net/problem/1463 [1로 만들기]

const n = Number(require('fs').readFileSync('input.txt').toString().trim());

let dp = new Array(n + 1).fill(1000);
cnt = 1;

for (let i = n; i > 0; i--) { //뒤에서부터 돌면서
    if (i % 2 === 0) { //2로 나눠지는 경우
        //현재 cnt가 현재 index값보다 큰 경우, 내 index+1한 값과 원래 있던 값 중에 작은 값 넣기.
        if (cnt > dp[i]) dp[i / 2] = Math.min(dp[i] + 1, dp[i / 2]);
        else dp[i / 2] = cnt;
    }
    if (i % 3 === 0) { //3로 나눠지는 경우
        //현재 cnt가 현재 index값보다 큰 경우, 내 index+1한 값과 원래 있던 값 중에 작은 값 넣기.
        if (cnt > dp[i]) dp[i / 3] = Math.min(dp[i] + 1, dp[i / 3]);
        else dp[i / 3] = cnt;
    }
    if (cnt > dp[i]) dp[i - 1] = Math.min(dp[i] + 1, dp[i - 1]); //일단 -1한 값들도 넣어주기.
    else dp[i - 1] = cnt;
    cnt += 1;
}

if (n === 1) console.log(0);
else console.log(dp[1]);

