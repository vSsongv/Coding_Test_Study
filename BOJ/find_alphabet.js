// https://www.acmicpc.net/problem/10809 [알파벳 찾기]

const fs = require('fs');
//백준 제출시 여기 주석 풀기
const readFileSyncAdress = '/dev/stdin';
//로컬 테스트 시 여기 주석 풀기
// const readFileSyncAdress = 'input.txt';

let input = fs.readFileSync(readFileSyncAdress).toString().trim().split(' ');
input = input[0];

let alpha = new Array();

for(let i = 97; i < 123; i++) {
    alpha.push(String.fromCharCode(i));
}

for(let j = 0; j < alpha.length; j++) {
    console.log(input.indexOf(alpha[j]));
}