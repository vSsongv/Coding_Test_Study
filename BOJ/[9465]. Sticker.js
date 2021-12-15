// https://www.acmicpc.net/problem/9465 [스티커]

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

var cases = Number(input[0]);
input.shift();

for (var num = 0; num < cases; num++) {
    var count = Number(input[3 * num]);
    var top = input[3 * num + 1].split(' ').map(v => Number(v));
    var bottom = input[3 * num + 2].split(' ').map(v => Number(v));
    var dp = [[0, top[0], bottom[0]]];
    for (var i = 1; i < count; i++) {
        dp[i] = [
            Math.max(...dp[i - 1]),
            Math.max(dp[i - 1][0], dp[i - 1][2]) + top[i],
            Math.max(dp[i - 1][0], dp[i - 1][1]) + bottom[i]
        ];
    }
    console.log(Math.max(...dp[count - 1]));
}