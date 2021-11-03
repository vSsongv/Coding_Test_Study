// https://www.acmicpc.net/problem/2343 [기타 레슨]

let Path = "input.txt"
//로컬 테스트시 주석
// let Path = "/dev/stdin"
// --------------------------------------------------------------
const input = require('fs').readFileSync(Path).toString().trim().split('\n');

let target = input[0].split(' ')[1];
let arr = input[1].split(" ").map(Number);
let answer = 0;
let left = Math.max(...arr);
let right = arr.reduce((a, b) => { return a + b; })

function count(mid) {
    let sum = 0, cnt = 1;
    for (let time of arr) {
        if (sum + time > mid) {
            sum = time;
            cnt += 1;
        }
        else sum += time;
    }
    return cnt;
}

while (left <= right) {
    let mid = parseInt((left + right) / 2);

    if (count(mid) <= target) {
        answer = mid;
        right = mid - 1;
    }
    else left = mid + 1;
}

console.log(answer);