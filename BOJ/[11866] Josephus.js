// https://www.acmicpc.net/problem/11866 [요세푸스 문제]

const input = require('fs').readFileSync('input.txt').toString().trim().split(' ');

let n = Number(input[0]);
let t = Number(input[1]);
let arr = Array.from({length:n}, (v, i) => i+1);
let answer = [];

while(arr.length != 0) {
    for(let i = 1; i < t; i++) arr.push(arr.shift());
    answer.push(arr.shift()); //맨 앞에거 answer에 추가
}

console.log(`<${answer.join(', ')}>`);
