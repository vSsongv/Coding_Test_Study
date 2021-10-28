// https://www.acmicpc.net/problem/1890 [공유기]

let Path = "input.txt";
// let Path = "/dev/stdin"

const fs = require('fs').readFileSync(Path);
let input = fs.toString().trim().split('\n');

const n = Number(input.shift());
input = input.map(x => x.split(' ').map(x => Number(x)));
let dp = new Array(n).fill(null).map(x => new Array(n).fill(BigInt(0)));
dp[0][0] = 1; //첫 칸은 1로 초기화한 후

for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
        if (dp[i][j] === 0 || ((i === n - 1) && (j === n - 1))) continue;
        else {
            let jump = input[i][j];
            let down = i + jump; //아래로 이동할 좌표
            let right = j + jump; //오른쪽으로 이동할 좌표

            if (down < n) dp[down][j] += BigInt(dp[i][j]); //오른쪽으로 이동할 좌표에 몇번 왔는지 기록
            if (right < n) dp[i][right] += BigInt(dp[i][j]); //오른쪽으로 이동할 좌표에 몇번 왔는지 기록
        }
    }
}
console.log(dp[n - 1][n - 1].toString());


