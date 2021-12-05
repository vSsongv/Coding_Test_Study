// https://www.acmicpc.net/problem/15729 [방탈출]

const inputs = require('fs')
    .readFileSync(
        process.platform === 'linux' ? 'dev/stdin' : 'input.txt'
    )
    .toString()
    .trim()
    .split('\n');

const n = +inputs[0];
const arr = inputs[1].split(' ').map(Number);
let pwd = new Array(n).fill(0);
let cnt = 0;

for (let i = 0; i < n; i++) {
    if (arr[i] !== pwd[i]) { //답이랑 다른 상태면
        cnt += 1;
        pwd[i] = pwd[i] === 0 ? 1 : 0; //0인건 1로, 1인건 0으로 눌러주고
        if (i < n - 1) {
            pwd[i + 1] = pwd[i + 1] === 0 ? 1 : 0; //옆의 것도 바꿔줘야함.
            if (i < n) { pwd[i + 2] = pwd[i + 2] === 0 ? 1 : 0 }; //옆의 것도 바꿔줘야함.
        }
    }
}

console.log(cnt);