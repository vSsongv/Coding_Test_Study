// https://www.acmicpc.net/problem/2470 [두 용액]

//백준제출시 주석
let Path = "input.txt"
//로컬 테스트시 주석
// let Path = "/dev/stdin"
const [n, ...arr] = require('fs').readFileSync(Path).toString().trim().split(/\s+/).map(Number);

arr.sort((a, b) => a - b); //한번 정렬해주기.
let left = 0;
let right = arr.length - 1;
let min = Infinity;
let first = 0, second = 0;

while (left < right) {
    let tmp = arr[left] + arr[right];
    if (Math.abs(tmp) < min) {
        first = arr[left];
        second = arr[right];
        min = tmp;
        if (tmp === 0) break;
    }
    if (tmp < 0) left += 1;
    else right -= 1;
}

console.log(first, second);