// https://www.acmicpc.net/problem/12865 [평범한 배낭]

let Path = "input.txt"
//로컬 테스트시 주석
// let Path = "/dev/stdin"
// --------------------------------------------------------------
const fs = require('fs');
let input = fs.readFileSync(Path).toString().trim().split('\n');

const num = input[0].split(' ')[0];
const max = +input[0].split(' ')[1];

let dp = new Array(max + 1).fill(0);

for (let i = 1; i <= num; i++) {
    let weight = +input[i].split(' ')[0];
    let value = +input[i].split(' ')[1];
    for (let j = max; j >= weight; j--) {
        dp[j] = Math.max(dp[j], dp[j - weight] + value);
    }
}

console.log(dp[max]);
