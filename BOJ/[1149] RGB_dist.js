// https://www.acmicpc.net/problem/1149 [RGB 거리]

var fs = require("fs");
// let array = fs.readFileSync("/dev/stdin").toString().split("\n");
let input = fs.readFileSync("input.txt").toString().split("\n");
let N = input[0];
money = new Array(N);

for (let i = 0; i < N; i++) {
    money[i] = new Array(3);
    for (let j = 0; j < 3; j++) {
        money[i][j] = Number(input[i + 1].split(" ")[j]); //비용 배열 생성
    }
}

let dp = new Array(N);
for (let i = 0; i < N; i++) {
    dp[i] = [0, 0, 0];
}
dp[0] = money[0];

//dp[i][0]은 i번째 집이 빨간색을 칠하는 경우.
for (let h = 1; h < N; h++) {
    dp[h][0] = Math.min(dp[h - 1][1], dp[h - 1][2]) + money[h][[0]]; //i번재 집이 빨간색을 칠하는 경우 위의 파랑, 초록 중에서 더 싼 비용을 선택하면 됨.
    dp[h][1] = Math.min(dp[h - 1][0], dp[h - 1][2]) + money[h][[1]]; //i번째 집이 파란색을 칠하는 경우
    dp[h][2] = Math.min(dp[h - 1][0], dp[h - 1][1]) + money[h][[2]]; //i번째 집이 초록색을 칠하는 경우
}
console.log(Math.min(...dp[N - 1])); //마지막 줄에서 가장 작은 값 선택하기.