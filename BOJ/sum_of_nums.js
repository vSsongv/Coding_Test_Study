// https://www.acmicpc.net/problem/2003 [수들의 합]
//백준제출시 주석
// let Path = "input.txt"
//로컬 테스트시 주석
let Path = "/dev/stdin"
const [num, target, ...arr] = require("fs").readFileSync(Path).toString().trim().split(/\s/).map(v => +v);

let answer = 0, sum = 0;

let right = 0;
for (let left = 0; left < num; left++) {
    while (sum < target && right < num) {
        sum += arr[right++];
    }
    if (sum == target) answer += 1;
    sum -= arr[left];
}

console.log(answer);