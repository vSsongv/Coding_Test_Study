// https://www.acmicpc.net/problem/11399 [ATM]

// const [n, ...arr] = require('fs').readFileSync('/dev/stdin').toString().trim().split(/\s+/);
const [n, ...arr] = require('fs').readFileSync('input.txt').toString().trim().split(/\s+/);

arr.sort((a,b) => a-b);
let sum = 0;
let answer = 0;

for(let i = 0; i < n; i++) {
    sum += Number(arr[i]);
    answer += sum;
}

console.log(answer);
